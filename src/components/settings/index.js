import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** Redux */
import { connect } from 'react-redux';

/** Antd */
import { Input, Button } from 'antd';

/** Components */
import ButtonWrapper from '../button-wrapper';

/** Messages */
import { showSuccess, showError } from '../../utils/messages';

/** API */
import { changePassword } from '../../api/user';

/** Actions */
import { logOut } from '../../store/user/actions';

/** Literals */
import { loginTxt, commons } from '../../utils/literals';

/** Style */
import './index.css';

class Settings extends Component {
  state = {
    pass1: '',
    pass2: ''
  };

  updateField = field => ({ target: { value } }) => {
    this.setState({ [field]: value });
  };

  logOut = () => {
    const { _logOut, cancel } = this.props;
    _logOut();
    cancel();
    showSuccess(loginTxt.logoutSuccess);
  };

  onContinueHandler = () => {
    const { pass2 } = this.state;
    const { finish } = this.props;
    changePassword(pass2)
      .then(() => {
        showSuccess(loginTxt.passwordChangeSuccess);
        finish();
      })
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
    const { cancel } = this.props;
    const { pass1, pass2 } = this.state;
    return (
      <div className="settings-wrapper">
        <h2>{loginTxt.newPassword}</h2>
        <Input.Password
          placeholder={loginTxt.newPassword}
          value={pass1}
          onChange={this.updateField('pass1')}
        />
        <h2>{loginTxt.confirmPassword}</h2>
        <Input.Password
          placeholder={loginTxt.confirmPassword}
          value={pass2}
          onChange={this.updateField('pass2')}
          disabled={!pass1}
        />
        <ButtonWrapper>
          <Button onClick={cancel}>{commons.cancel}</Button>
          <Button
            onClick={this.onContinueHandler}
            type="primary"
            disabled={pass1 !== pass2 || !pass2 || !pass1}
          >
            {commons.continue}
          </Button>
        </ButtonWrapper>
        <Button
          onClick={this.logOut}
          type="danger"
          icon="logout"
          shape="circle"
          size="large"
        />
      </div>
    );
  }
}

Settings.propTypes = {
  cancel: PropTypes.func.isRequired,
  finish: PropTypes.func.isRequired,
  _logOut: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  _logOut: () => logOut(dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Settings);
