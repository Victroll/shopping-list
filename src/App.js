import React, { Component } from 'react';

/** antd */
import { Button, Row, Col } from 'antd';

class App extends Component {
  render() {
    return (
      <Row gutter={24} type="flex" justify="center">
        <Col span={6} offset={3}>
          <Button>Ver listas</Button>
        </Col>
        <Col span={6}>
          <Button>Crear listas</Button>
        </Col>
        <Col span={6}>
          <Button>Ajustes</Button>
        </Col>
      </Row>
    );
  }
}

export default App;
