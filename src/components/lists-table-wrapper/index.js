import React from 'react';

/** Models */
import { childrenModel } from '../../utils/models';

/** Literals */
import { showListsTable } from '../../utils/literals';

/** CSS */
import './index.css';

const ListsTableWrapper = ({ children }) => (
  <div className='lists-table-wrapper'>
    <h1>{showListsTable.title}</h1>
    {children}
  </div>
);

ListsTableWrapper.propTypes = {
  children: childrenModel.isRequired
};

export default ListsTableWrapper;
