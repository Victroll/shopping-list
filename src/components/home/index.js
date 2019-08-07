import React from 'react';
import PropTypes from 'prop-types';

/** Redux */
import { connect } from 'react-redux';

/** Components */
import HomeCard from '../home-card';
import LoginButton from '../login-button';

/** Literals */
import { homeTxt } from '../../utils/literals';

/** CSS */
import './index.css';

/** Paths */
import paths from '../../utils/paths';

/** Models */
import { historyModel } from '../../utils/models';

/**
 * Navigate to Create New List section.
 * The url by default is: /create-new-list
 * @param {object} history
 */
const goToCreateNewList = history => {
  history.push(paths.newList);
};

/**
 * Navigate to Show Lists section.
 * The url by default is: /show-lists
 * @param {object} history
 */
const goToShowLists = history => {
  history.push(paths.showLists);
};

const goToExpenses = history => {
  history.push(paths.expenses);
};

const Home = ({ history, logged }) => (
  <>
    <LoginButton history={history} />
    <div className="home">
      <HomeCard
        icon="profile"
        title={homeTxt.showLists}
        buttonTxt={homeTxt.showListsButton}
        onClick={() => goToShowLists(history)}
      />
      <HomeCard
        icon="edit"
        title={homeTxt.newList}
        buttonTxt={homeTxt.newListButton}
        onClick={() => goToCreateNewList(history)}
      />
      <HomeCard
        icon="euro"
        title={homeTxt.expenses}
        buttonTxt={homeTxt.expensesButton}
        onClick={() => goToExpenses(history)}
        disabled={!logged}
      />
    </div>
  </>
);

Home.propTypes = {
  history: historyModel.isRequired,
  logged: PropTypes.bool.isRequired
};

const mapStateToProps = ({ userReducer: { logged } }) => ({
  logged
});

export default connect(mapStateToProps)(Home);
