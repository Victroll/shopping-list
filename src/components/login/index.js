import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** Redux */
import { connect } from 'react-redux';

/** antd  */
import { Input } from 'antd';

/** Actions */
import { logIn } from '../../store/user/actions';

/** Components */
import SLModal from '../modal';

class Login extends Component {
  state = {
    loginInput: '',
    loginPass: ''
  };

  componentDidUpdate({ logged: previousLogged }) {
    const { logged, onCancel } = this.props;
    if (!previousLogged && logged) {
      onCancel();
    }
  }

  updateField = field => ({ target: { value } }) => {
    this.setState({
      [field]: value
    });
  }

  logIn = () => {
    const { _logIn } = this.props;
    const { loginInput, loginPass } = this.state;
    _logIn(loginInput, loginPass);
  }

  render() {
    const { onCancel } = this.props;
    const { loginInput, loginPass } = this.state;
    return (
      <SLModal title='Login' onCancel={onCancel} onContinue={this.logIn}>
        <div>
          <h2>Usuario</h2>
          <Input
            placeholder='Introduce tu usuario'
            value={loginInput}
            onChange={this.updateField('loginInput')}
          />
          <h2>Contraseña</h2>
          <Input.Password
            placeholder='Introduce tu contraseña'
            value={loginPass}
            onChange={this.updateField('loginPass')}
          />
        </div>
      </SLModal>
    );
  }
}

Login.propTypes = {
  onCancel: PropTypes.func,
  _logIn: PropTypes.func,
  logged: PropTypes.bool
};

const mapStateToProps = ({ userReducer: { logged }}) => ({
  logged
});

const mapDispatchToProps = dispatch => ({
  _logIn: (user, password) => logIn(user, password, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
