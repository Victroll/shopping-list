import React, { Component } from 'react';

/** antd */
import { Button } from 'antd';

/** Components */
import Login from '../login';

/** Styles */
import './index.css';

class LoginButton extends Component {
  state = {
    showLogin: false
  };

  toggleLogin = () => {
    const { showLogin } = this.state;
    this.setState({
      showLogin: !showLogin
    });
  }

  render() {
    const { showLogin } = this.state;
    return (
      <div className='login-button'>
        <Button
          type='primary'
          shape='circle'
          icon='user'
          size='large'
          onClick={this.toggleLogin}
        />
        {showLogin && <Login onCancel={this.toggleLogin}/>}
      </div>
    );
  };
}

export default LoginButton;
