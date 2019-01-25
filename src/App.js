import React from 'react';

/** antd */
import { Layout } from 'antd'

/** Components */
import Home from './components/home';
import GitHubCorner from './components/GitHub-corner';

const { Content } = Layout;

const App = () => (
  <Layout className='content'>
    <GitHubCorner />
    <Content>
      <Home />
    </Content>
  </Layout>
);

export default App;
