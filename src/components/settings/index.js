import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** Antd */
import { Input, Button } from 'antd';

/** Components */
import ButtonWrapper from '../button-wrapper';

/** Messages */
import { showSuccess, showError } from '../../utils/messages';

/** API */
import { changePassword } from '../../api/user';

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
      </div>
    );
  }
}

Settings.propTypes = {
  cancel: PropTypes.func.isRequired,
  finish: PropTypes.func.isRequired
};

export default Settings;
