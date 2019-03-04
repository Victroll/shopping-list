import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** antd  */
import { Collapse, Button, message } from 'antd';

/** Components */
import ProductPanel from '../product-panel';
import ButtonWrapper from '../button-wrapper';
import SLModal from '../modal';

/** Models */
import { productModel } from '../../utils/models';

/** Actions */
import {
  addProduct,
  removeProduct,
  resetList
} from '../../store/new-list/actions';
import { saveNewList } from '../../utils/localStorage';

/** Literals */
import { createNewListTxt, commons } from '../../utils/literals';

/** CSS */
import './index.css';

const { Panel } = Collapse;

class NewList extends Component {
  constructor(props) {
    super(props);
    const { addProductHandler, products } = props;

    this.state = {
      activeKey: '0',
      showCancelModal: false,
      showFinishModal: false
    };

    if (products.length === 0) {
      addProductHandler();
    }
  }

  onAddHandler = () => {
    const { addProductHandler, products } = this.props;
    addProductHandler();
    this.setState({
      activeKey: `${products.length}`
    });
  };

  onCollapseHandler = id => {
    if (id === undefined) {
      this.setState({ activeKey: null });
    } else {
      this.setState({ activeKey: id });
    }
  };

  onRemoveHandler = id => {
    const { removeProductHandler } = this.props;
    removeProductHandler(id);     
  };

  onCancelHandler = () => {
    const { cancel, resetListHandler } = this.props;
    resetListHandler();
    cancel();
  };

  onFinishHandler = () => {
    const { title, products, finish, resetListHandler } = this.props;
    saveNewList(title, products);
    resetListHandler();
    message.success(createNewListTxt.success(title));
    finish();
  };

  onShowCancelModalHandler = () => {
    const { showCancelModal } = this.state;
    this.setState({ showCancelModal: !showCancelModal });
  };

  onShowFinishModalHandler = () => {
    const { showFinishModal } = this.state;
    this.setState({ showFinishModal: !showFinishModal });
  };

  render() {
    const { activeKey, showCancelModal, showFinishModal } = this.state;
    const { products, title, prev } = this.props;
    return (
      <Fragment>
        <h1>{title}</h1>
        <Collapse
          className='product-panel'
          accordion
          activeKey={activeKey}
          onChange={this.onCollapseHandler}
        >
          {products.map((prod, i) => (
            <Panel
              key={`${i}`}
              header={products[i] === undefined || products[i].name === ''
                ? createNewListTxt.newProduct.title
                : products[i].name}
            >
              <ProductPanel
                key={i}
                id={i}
                onAdd={this.onAddHandler}
                onRemove={() => this.onRemoveHandler(i)}
                product={prod}
                removeDisabled={products.length === 1}
              />
            </Panel>
          ))}
        </Collapse>
        <ButtonWrapper>
          <Button onClick={prev}>
            {commons.back}
          </Button>
          <Button type='danger' onClick={this.onShowCancelModalHandler}>
            {commons.cancel}
          </Button>
          <Button type='primary' onClick={this.onShowFinishModalHandler}>
            {commons.finish}
          </Button>
        </ButtonWrapper>
        {showCancelModal && (
          <SLModal
            title={createNewListTxt.cancelModalTitle(title)}
            onCancel={this.onShowCancelModalHandler}
            onContinue={this.onCancelHandler}
          >
            {createNewListTxt.cancelList}
          </SLModal>
        )}
        {showFinishModal && (
          <SLModal
            title={createNewListTxt.finishModalTitle}
            onCancel={this.onShowFinishModalHandler}
            onContinue={this.onFinishHandler}
          >
            {createNewListTxt.finishList}
          </SLModal>
        )}
      </Fragment>
    );
  }
}

NewList.propTypes = {
  addProductHandler: PropTypes.func,
  products: PropTypes.arrayOf(productModel),
  removeProductHandler: PropTypes.func,
  title: PropTypes.string,
  prev: PropTypes.func,
  cancel: PropTypes.func,
  resetListHandler: PropTypes.func,
  finish: PropTypes.func
};

const mapStateToProps = ({ newListReducer: { products, title } }) => ({
  products,
  title
});

const mapDispatchToProps = dispatch => ({
  addProductHandler: () => addProduct(dispatch),
  removeProductHandler: id => removeProduct(id, dispatch),
  resetListHandler: () => resetList(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewList);
