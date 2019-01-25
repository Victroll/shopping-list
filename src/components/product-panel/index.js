import React, { Fragment, Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

/** antd  */
import { Input, InputNumber, Radio, Button } from 'antd';

/** Components */
import ProductInfoWrapper from '../product-info-wrapper';

/** Literals */
import { createNewListTxt } from '../../utils/literals';

/** Models */
import { productModel } from '../../utils/models';

/** Actions */
import { addProduct, updateProduct } from '../../store/new-list/actions';

/** CSS */
import './index.css';

const RadioGroup = Radio.Group;

class ProductPanel extends Component {
  constructor(props) {
    super(props);

    const { product } = props;

    this.state = {
      name: product === undefined
        ? ''
        : product.name,
      amount: product === undefined
        ? 1
        : product.amount,
      uds: product === undefined
        ? 0
        : product.uds
    };
  }

  componentDidUpdate(prevProps) {
    const { product: prevProduct } = prevProps;
    const { product: newProduct } = this.props;
    if (prevProduct.name !== newProduct.name) {
      this.setState({ // eslint-disable-line
        name: newProduct.name,
        amount: newProduct.amount,
        uds: newProduct.uds,
      });
    }
  }

  updateField = (field, newValue) => {
    const { updateProductHandler, id } = this.props;
    updateProductHandler(id, field, newValue);
    this.setState({ [field]: newValue });
  };

  render() {
    const { onAdd, onRemove, id } = this.props;
    const { name, amount, uds } = this.state;
    return (
      <Fragment>
        <ProductInfoWrapper title={createNewListTxt.newProduct.name}>
          <Input
            placeholder={createNewListTxt.newProduct.namePlaceholder()}
            value={name}
            onChange={e => this.updateField('name', e.target.value)}
          />
        </ProductInfoWrapper>
        <ProductInfoWrapper title={createNewListTxt.newProduct.amount}>
          <InputNumber
            value={amount}
            min={1}
            onChange={e => this.updateField('amount', e)}
          />
          <RadioGroup
            onChange={
              e => this.updateField('uds', e.target.value)
            }
            value={uds}
            className='radio-group'
          >
            <Radio value={0}>{createNewListTxt.newProduct.kg}</Radio>
            <Radio value={1}>{createNewListTxt.newProduct.uds}</Radio>
          </RadioGroup>
        </ProductInfoWrapper>
        <ProductInfoWrapper>
          <div className='product-info-button-wrapper'>
            <Button
              type='primary'
              icon='plus-circle'
              shape='circle-outline'
              onClick={onAdd}
            />
            <Button
              type='primary'
              icon='delete'
              shape='circle-outline'
              onClick={onRemove}
              disabled={id === 0}
            />
          </div>
        </ProductInfoWrapper>
      </Fragment>
    );
  }
}

ProductPanel.propTypes = {
  product: productModel,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  updateProductHandler: PropTypes.func,
  id: PropTypes.number
};

const mapDispatchToProps = dispatch => ({
  addProductHandler:
    ({ name, amount, uds }) => addProduct(name, amount, uds, dispatch),
  updateProductHandler:
    (id, field, value) => updateProduct(id, field, value, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(ProductPanel);
