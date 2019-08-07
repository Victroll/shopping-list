import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** Redux */
import { connect } from 'react-redux';

/** Antd */
import { Button } from 'antd';

/** Components */
import Login from '../login';

/** Actions */
import { logInWithToken } from '../../store/user/actions';

/** Paths */
import paths from '../../utils/paths';

/** Styles */
import './index.css';

/** Models */
import { historyModel } from '../../utils/models';

class LoginButton extends Component {
  state = {
    showLogin: false
  };

  componentDidMount() {
    const { _logInWithToken } = this.props;
    _logInWithToken();
  }

  toggleLogin = () => {
    const { showLogin } = this.state;
    this.setState({
      showLogin: !showLogin
    });
  };

  goToSettings = () => {
    const { history } = this.props;
    history.push(paths.settings);
  };

  render() {
    const { userName } = this.props;
    const { showLogin } = this.state;
    return (
      <div className="login-button">
        <Button
          type="primary"
          shape="circle"
          icon={!userName ? 'user' : ''}
          size="large"
          onClick={!userName ? this.toggleLogin : this.goToSettings}
        >
          {userName && userName.charAt(0)}
        </Button>
        {showLogin && <Login onCancel={this.toggleLogin} />}
      </div>
    );
  }
}

LoginButton.propTypes = {
  history: historyModel.isRequired,
  userName: PropTypes.string.isRequired,
  _logInWithToken: PropTypes.func.isRequired
};

const mapStateToProps = ({ userReducer: { userName } }) => ({
  userName
});

const mapDispatchToProps = dispatch => ({
  _logInWithToken: () => logInWithToken(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButton);
