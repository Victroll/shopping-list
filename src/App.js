import React from 'react';

/** antd */
import { Layout } from 'antd'

/** Components */
import Home from './components/home';

const { Content, Footer } = Layout;

const App = () => (
  <Layout className='content'>
    <Content>
      <Home />
    </Content>
    <Footer className='footer'>FOOTER</Footer>
  </Layout>
);

export default App;
