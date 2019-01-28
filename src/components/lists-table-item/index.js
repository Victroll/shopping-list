import React from 'react';
import PropTypes from 'prop-types';

/** antd  */
import { List, Button } from 'antd';

/** Literals */
import { showListsTable } from '../../utils/literals';

/** CSS */
import './index.css';

const { Item } = List;
const { Meta } = Item;

const ListsTableItem = ({ title, count, onDelete, onShow, onEdit }) => (
  <Item className='item'>
    <Meta
      title={title}
      description={`${showListsTable.products}${count}`}
    />
    <Button
      type='primary'
      icon='eye'
      shape='circle-outline'
      onClick={() => onShow(title)}
    />
    <Button
      icon='edit'
      shape='circle-outline'
      onClick={() => onEdit(title)}
    />
    <Button
      icon='delete'
      shape='circle-outline'
      onClick={() => onDelete(title)}
    />
  </Item>
);

ListsTableItem.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  onDelete: PropTypes.func,
  onShow: PropTypes.func,
  onEdit: PropTypes.func
};

export default ListsTableItem;
