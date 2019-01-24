import React from 'react';
import PropTypes from 'prop-types';

/** antd */
import { Button, Icon } from 'antd';

/** CSS */
import './index.css';

const HomeCard = ({ icon, title, buttonTxt }) => (
  <div className='home-card'>
    <Icon type={icon} theme="twoTone" className='icon' />
    <h1>{title}</h1>
    <Button>{buttonTxt}</Button>
  </div>
);

HomeCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  buttonTxt: PropTypes.string.isRequired
}

export default HomeCard;
