import React from 'react';

/** Antd */
import { Spin } from 'antd';

/** Style */
import './index.css';

const Loader = () => (
  <div className="loader-wrapper">
    <Spin size="large" />
  </div>
);

export default Loader;
