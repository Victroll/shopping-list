import React, { Component } from 'react';

/** antd */
import { Button } from 'antd';

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
