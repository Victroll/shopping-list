import React from 'react';

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
 * The url by default is: /createNewList
 * @param {object} history 
 */
const goToCreateNewList = history => {
  history.push(paths.newList);
};

const Home = ({ history }) => (
  <div className='home'>
    <HomeCard
      icon="profile"
      title={homeTxt.showLists}
      buttonTxt={homeTxt.showListsButton}
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
    />
  </div>
);

Home.propTypes = {
  history: historyModel
};

export default Home;
