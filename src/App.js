import React from 'react';
import Calculator from './component/Calculator';
import './component/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Calculator />;
  }
}

export default App;
