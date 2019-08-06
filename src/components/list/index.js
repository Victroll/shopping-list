import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** Antd  */
import { Table, Checkbox, Button } from 'antd';

/** Components */
import ButtonWrapper from '../button-wrapper';

/** Actions */
import { checkProduct, resetList } from '../../store/show-list/actions';

/** Literals */
import { commons } from '../../utils/literals';

/** CSS */
import './index.css';

const columns = [
  {
    title: 'Producto',
    dataIndex: 'name',
    key: 'name',
  render: text => <h2>{text}</h2> // eslint-disable-line
  },
  {
    title: 'Cantidad',
    dataIndex: 'amount',
    key: 'amount'
  },
  {
    title: 'Cogido',
    dataIndex: 'caught',
    key: 'cuaght',
  render: ({ checked, checkHandler }) => // eslint-disable-line
      <Checkbox
        defaultChecked={checked}
        value={checked}
        onChange={checkHandler}
    /> // eslint-disable-line
  }
];

const List = ({ title, data, prev }) => (
  <Fragment>
    <h1>{title}</h1>
    <Table bordered pagination={false} columns={columns} dataSource={data} />
    <ButtonWrapper>
      <Button onClick={prev}>{commons.back}</Button>
      {/* TODO: reset */}
      {/* <Button onClick={resetListHandler} type='primary'>
        {showListsTable.reset}
      </Button> */}
    </ButtonWrapper>
  </Fragment>
);

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      caught: PropTypes.bool.isRequired
    })
  ).isRequired,
  prev: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

const mapStateToProps = ({ showListReducer: { title, list } }) => ({
  title,
  list
});

const mapDispatchToProps = dispatch => ({
  checkProductHandler: id => checkProduct(dispatch, id),
  resetListHandler: () => resetList(dispatch)
});

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => ({
  ...propsFromState,
  ...propsFromDispatch,
  ...ownProps,
  data: propsFromState.list.map((prod, i) => ({
    key: `${prod.name}-${i}`,
    name: prod.name,
    amount: `${prod.amount} ${prod.uds === 0 ? 'kgs.' : 'uds.'}`,
    caught: {
      checked: prod.caught,
      checkHandler: () => propsFromDispatch.checkProductHandler(i)
    }
  }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(List);
