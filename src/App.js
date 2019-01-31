import React from 'react';

/** Redux */
import { Provider } from 'react-redux';

/** antd */
import { Layout } from 'antd';

/** Router */
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

/** Components */
import Home from './components/home';
import GitHubCorner from './components/GitHub-corner';
import AppLayout from './components/app-layout';
import FlowStateMachine from './utils/flowStateMachine';

/** Paths */
import paths from './utils/paths';

/** States */
import { createNewListStates, showListStates } from './utils/flowStates';

import store from './store';

const { Content } = Layout;

const App = () => (
  <Provider store={store}>
    <Layout>
      <GitHubCorner />
      <Content className='content'>
        <Router basename='https://victroll.github.io'>
          <Switch>
            <Route
              exact
              path={paths.home}
              render={props => (
                <Home {...props} />
              )}
            />
            <Route
              exact
              path={paths.newList}
              render={props => (
                <AppLayout>
                  <FlowStateMachine
                    {...props}
                    stateList={createNewListStates}
                    allowRecursivity
                  />
                </AppLayout>
              )}
            />
            <Route
              exact
              path={paths.showLists}
              render={props => (
                <AppLayout>
                  <FlowStateMachine
                    {...props}
                    stateList={showListStates}
                    allowRecursivity
                  />
                </AppLayout>
              )}
            />
          </Switch>
        </Router>
      </Content>
    </Layout>
  </Provider>
);

export default App;
