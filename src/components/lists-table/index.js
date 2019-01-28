import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** antd  */
import { List, Button } from 'antd';

/** Components */
import ButtonWrapper from '../button-wrapper';
import ListsTableItem from '../lists-table-item';
import ListsTableWrapper from '../lists-table-wrapper';
import SLModal from '../modal';

/** Actions */
import { getLists, removeList } from '../../utils/localStorage';
import { setList } from '../../store/show-list/actions';
import {
  saveTitle,
  setList as setEditList
} from '../../store/new-list/actions';

/** Literals */
import { commons, homeTxt, showListsTable } from '../../utils/literals';
import { historyModel } from '../../utils/models';

/** Paths */
import paths from '../../utils/paths';

/** CSS */
import './index.css';

class ListsTable extends Component {
  constructor() {
    super();

    this.state = {
      lists: {},
      showModal: false,
      nextId: null
    };
  }
  
  componentDidMount() {
    this.setState({
      lists: getLists()
    });
  }

  onCreateHandle = () => {
    const { history } = this.props;
    history.push(paths.newList);
  }

  onDeleteHandler = id => {
    const lists = removeList(id);
    this.setState({ lists });
  };

  onShowListHandler = id => {
    // If there is any list stored in the reducer, a modal for showing
    // the new one is shown
    const { currentList, next } = this.props;
    if (currentList !== null && id !== currentList) {
      this.onToggleModal(id);
    } else if (currentList === null) {
        this.onStoreAndShowListHandler(id);
    } else {
      next();      
    }
  }

  onStoreAndShowListHandler = id => {
    const { setListHandler, next } = this.props;
    const { lists } = this.state;
    setListHandler(id, lists[id].map(
      prod => ({
        ...prod,
        caught: false
      })
    ));
    next();
  };

  onToggleModal = nextId => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal, nextId });
  };

  onEditListHandler = id => {
    const { saveTitleHandler, setEditListHandler, edit } = this.props;
    const { lists } = this.state;
    saveTitleHandler(id);
    setEditListHandler(lists[id]);
    edit();
  };

  render() {
    const { prev } = this.props;
    const { lists, showModal, nextId } = this.state;
    return (
      <Fragment>
        <ListsTableWrapper>
          {Object.keys(lists).length === 0
            ? <List />
            : (
              <List
                className='lists-table'
                bordered
                dataSource={
                  Object.keys(lists).map(title => ({
                    title,
                    count: lists[title].length
                  }))
                }
                renderItem={item => (
                  <ListsTableItem
                    title={item.title}
                    count={item.count}
                    onDelete={this.onDeleteHandler}
                    onShow={this.onShowListHandler}
                    onEdit={this.onEditListHandler}
                  />
                )}
              />
            )
          }
          <ButtonWrapper>
            <Button onClick={prev}>
              {commons.back}
            </Button>
            <Button type='primary' onClick={this.onCreateHandle}>
              {homeTxt.newListButton}
            </Button>
          </ButtonWrapper>
        </ListsTableWrapper>
        {showModal && (
          <SLModal
            title={showListsTable.modal.title}
            onCancel={this.onToggleModal}
            onContinue={() => this.onStoreAndShowListHandler(nextId)}
          >
            {showListsTable.modal.desc(nextId)}
          </SLModal>
        )}
      </Fragment>
    );
  }
}

ListsTable.propTypes = {
  prev: PropTypes.func,
  next: PropTypes.func,
  edit: PropTypes.func,
  history: historyModel,
  currentList: PropTypes.string,
  setListHandler: PropTypes.func,
  saveTitleHandler: PropTypes.func,
  setEditListHandler: PropTypes.func
};

const mapStateToProps = ({ showListReducer: { title } }) => ({
  currentList: title
});

const mapDispatchToProps = dispatch => ({
  setListHandler: (id, list) => setList(dispatch, id, list),
  saveTitleHandler: title => saveTitle(title, dispatch),
  setEditListHandler: products => setEditList(dispatch, products)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListsTable);
