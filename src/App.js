import React, { Component } from 'react';

/** antd */
import { Button } from 'antd';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>Ver listas</Button>
        <Button>Crear listas</Button>
        <Button>Ajustes</Button>
      </div>
    );
  }
}

export default App;
