import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './component/Calculator';
import Home from './component/Home';
import Quotes from './component/quotes';
import NavBar from './component/NavBar';
import './component/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Calculator">
            <Calculator />
          </Route>
          <Route path="/quotes">
            <Quotes />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
