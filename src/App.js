import React from 'react';

/** antd */
import { Layout } from 'antd'

/** Components */
import Home from './components/home';

const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout>
    <Header />
    <Content>
      <Home />
    </Content>
    <Footer />
  </Layout>
);

export default App;
