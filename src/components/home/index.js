import React from 'react';
import PropTypes from 'prop-types';

/** Redux */
import { connect } from 'react-redux';

/** Components */
import HomeCard from '../home-card';

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

const goToSettings = history => {
  history.push(paths.settings);
};

const Home = ({ history, logged }) => (
  <div className='home'>
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
      icon="setting"
      title={homeTxt.settings}
      buttonTxt={homeTxt.settingsButton}
      onClick={() => goToSettings(history)}
      disabled={!logged}
    />
  </div>
);

Home.propTypes = {
  history: historyModel,
  logged: PropTypes.bool
};

const mapStateToProps = ({ userReducer: { logged }}) => ({
  logged
});

export default connect(mapStateToProps)(Home);
