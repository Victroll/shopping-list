import React from 'react';

/** Redux */
import { Provider } from 'react-redux';

/** Antd */
import { Layout } from 'antd';

/** Router */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/** Components */
import Home from './components/home';
import GitHubCorner from './components/GitHub-corner';
import AppLayout from './components/app-layout';
import FlowStateMachine from './utils/flowStateMachine';
import Expenses from './components/expenses';

/** Paths */
import paths from './utils/paths';

/** States */
import {
  createNewListStates,
  showListStates,
  settingsStates
} from './utils/flowStates';

import store from './store';

const { Content } = Layout;

const App = () => (
  <Provider store={store}>
    <Layout>
      <GitHubCorner />
      <Content className="content">
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route
              exact
              path={paths.home}
              render={props => <Home {...props} />}
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
            <Route
              exact
              path={paths.settings}
              render={props => (
                <AppLayout>
                  <FlowStateMachine
                    {...props}
                    stateList={settingsStates}
                    allowRecursivity
                  />
                </AppLayout>
              )}
            />
            <Route
              exact
              path={paths.expenses}
              render={props => (
                <AppLayout>
                  <Expenses {...props} />
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
