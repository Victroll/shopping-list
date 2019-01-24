import React from 'react';

/** antd */
import { Row, Col, Button } from 'antd';

const Home = () => (
  <Row type="flex" justify="space-around">
    <Col span={6} offset={3}>
      <Button>1</Button>
    </Col>
    <Col span={6}>
      <Button>2</Button>
    </Col>
    <Col span={6}>
      <Button>3</Button>
    </Col>
  </Row>
);

export default Home;
