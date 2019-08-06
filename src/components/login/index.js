import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** Redux */
import { connect } from 'react-redux';

/** Antd  */
import { Input } from 'antd';

/** Actions */
import { logIn } from '../../store/user/actions';

/** Components */
import SLModal from '../modal';

/** Messages */
import { showSuccess, showError } from '../../utils/messages';

/** Literals */
import { loginTxt } from '../../utils/literals';

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
  };

  logIn = () => {
    const { _logIn } = this.props;
    const { loginInput, loginPass } = this.state;
    _logIn(loginInput, loginPass)
      .then(() => showSuccess(loginTxt.loginSuccess))
      .catch(error => {
        switch (error.response.status) {
          case 404:
            showError(loginTxt.login404);
            break;
          case 403:
            showError(loginTxt.login403);
            break;
          default:
            showError(error.response.data);
        }
      });
  };

  render() {
    const { onCancel } = this.props;
    const { loginInput, loginPass } = this.state;
    return (
      <SLModal
        title="Login"
        onCancel={onCancel}
        onContinue={this.logIn}
        continueDisabled={!loginInput || !loginPass}
      >
        <div>
          <h2>{loginTxt.userTitle}</h2>
          <Input
            placeholder={loginTxt.userPlaceholder}
            value={loginInput}
            onChange={this.updateField('loginInput')}
          />
          <h2>{loginTxt.passwordTitle}</h2>
          <Input.Password
            placeholder={loginTxt.passwordPlaceholder}
            value={loginPass}
            onChange={this.updateField('loginPass')}
          />
        </div>
      </SLModal>
    );
  }
}

Login.propTypes = {
  onCancel: PropTypes.func.isRequired,
  _logIn: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired
};

const mapStateToProps = ({ userReducer: { logged } }) => ({
  logged
});

const mapDispatchToProps = dispatch => ({
  _logIn: (user, password) => logIn(user, password, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
