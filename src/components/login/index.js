import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** antd  */
import { Input } from 'antd';

/** Components */
import SLModal from '../modal';

class Login extends Component {
  state = {
    loginInput: '',
    loginPass: ''
  };

  updateField = field => ({ target: { value } }) => this.setState({
    [field]: value
  });

  render() {
    const { onCancel, onContinue } = this.props;
    const { loginInput, loginPass } = this.state;
    return (
      <SLModal title='Login' onCancel={onCancel} onContinue={onContinue}>
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
  onContinue: PropTypes.func
};

export default Login;
