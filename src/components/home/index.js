import React from 'react';

/** Components */
import HomeCard from '../home-card';

/** Literals */
import { homeTxt } from '../../utils/literals';

/** CSS */
import './index.css';

const Home = () => (
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
    />
    <HomeCard
      icon="setting"
      title={homeTxt.settings}
      buttonTxt={homeTxt.settingsButton}
    />
  </div>
);

export default Home;
