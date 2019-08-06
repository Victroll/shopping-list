import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

/** Redux */
import { connect } from 'react-redux';

/** Antd  */
import { List, Button } from 'antd';

/** Components */
import ButtonWrapper from '../button-wrapper';
import ListsTableItem from '../lists-table-item';
import ListsTableWrapper from '../lists-table-wrapper';
import SLModal from '../modal';

/** API */
import { getAllLists, deleteList } from '../../api/list';

/** Actions */
import { getLists, removeList } from '../../utils/localStorage';
import { setList } from '../../store/show-list/actions';
import {
  saveTitle,
  setList as setEditList
} from '../../store/new-list/actions';

/** Messages */
import { showSuccess, showError } from '../../utils/messages';

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
    const { logged, userName } = this.props;
    // If the user is logged, get the list from the server
    if (!logged) {
      this.setState({
        lists: getLists()
      });
    } else {
      getAllLists(userName).then(({ data }) => this.setState({ lists: data }));
    }
  }

  onCreateHandle = () => {
    const { history } = this.props;
    history.push(paths.newList);
  };

  onDeleteHandler = id => {
    const { logged, userName } = this.props;
    // If the user is logged, delete the list in the server
    if (!logged) {
      this.setState({ lists: removeList(id) });
    } else {
      deleteList(id, userName)
        .then(({ data }) => {
          showSuccess('Lista eliminada');
          this.setState({ lists: data });
        })
        .catch(error => showError(error.response.data));
    }
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
  };

  onStoreAndShowListHandler = id => {
    const { setListHandler, next } = this.props;
    const { lists } = this.state;
    setListHandler(
      id,
      lists[id].map(prod => ({
        ...prod,
        caught: false
      }))
    );
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
          {Object.keys(lists).length === 0 ? (
            <List />
          ) : (
            <List
              className="lists-table"
              bordered
              dataSource={Object.keys(lists).map(title => ({
                title,
                count: lists[title].length
              }))}
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
          )}
          <ButtonWrapper>
            <Button onClick={prev}>{commons.back}</Button>
            <Button type="primary" onClick={this.onCreateHandle}>
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
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  history: historyModel.isRequired,
  currentList: PropTypes.string.isRequired,
  setListHandler: PropTypes.func.isRequired,
  saveTitleHandler: PropTypes.func.isRequired,
  setEditListHandler: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired
};

const mapStateToProps = ({
  showListReducer: { title },
  userReducer: { logged, userName }
}) => ({
  currentList: title,
  logged,
  userName
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
