import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** Redux */
import { connect } from 'react-redux';

/** antd */
import { Button } from 'antd';

/** Components */
import Login from '../login';

/** Actions */
import { logOut, logInWithToken } from '../../store/user/actions';

/** Styles */
import './index.css';

class LoginButton extends Component {
  state = {
    showLogin: false
  };

  componentDidMount() {
    const { _logInWithToken } = this.props;
    _logInWithToken();
  };

  toggleLogin = () => {
    const { showLogin } = this.state;
    this.setState({
      showLogin: !showLogin
    });
  }

  logOut = () => {
    const { _logOut } = this.props;
    _logOut();
  }

  render() {
    const { userName } = this.props;
    const { showLogin } = this.state;
    return (
      <div className='login-button'>
        <Button
          type='primary'
          shape='circle'
          icon={ !userName && 'user'}
          size='large'
          onClick={
            !userName
            ? this.toggleLogin
            : this.logOut}
        >
          {userName && userName.charAt(0)}
        </Button>
        {showLogin && <Login onCancel={this.toggleLogin}/>}
      </div>
    );
  };
}

LoginButton.propTypes = {
  userName: PropTypes.string,
  _logOut: PropTypes.func,
  _logInWithToken: PropTypes.func
};

const mapStateToProps = ({ userReducer: { userName }}) => ({
  userName
});

const mapDispatchToProps = dispatch => ({
  _logOut: () => logOut(dispatch),
  _logInWithToken: () => logInWithToken(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
