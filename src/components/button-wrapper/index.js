import React from 'react';

/** Models */
import { childrenModel } from '../../utils/models';

const ButtonWrapper = ({ children }) => (
  <div className='button-wrapper'>
    {children}
  </div>
);

ButtonWrapper.propTypes = {
  children: childrenModel.isRequired
};

export default ButtonWrapper;
