import React from 'react';
import PropTypes from 'prop-types';

/** Models */
import { childrenModel } from '../../utils/models';

const ProductInfoWrapper = ({ children, title }) => (
  <div className='product-info-wrapper'>
    <h2>{title}</h2>
    {children}
  </div>
);

ProductInfoWrapper.propTypes = {
  children: childrenModel.isRequired,
  title: PropTypes.string
};

export default ProductInfoWrapper;
