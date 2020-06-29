import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import HabitNew from './containers/HabitNew';
import './App.css';

class App extends Component {

  render() {
  return (
    <Router>
      <div className="container" align="center">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/new" component={ HabitNew } />
         
        </Switch>
      </div>
  </Router>
    );
  }
}

export default App;
