import React from 'react';

/** CSS */
import './index.css';

/** Models */
import { childrenModel } from '../../utils/models';

const AppLayout = ({ children }) => (
  <div className='app-layout'>
    {children}
  </div>
);

AppLayout.propTypes = {
  children: childrenModel.isRequired
};

export default AppLayout;
