import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import HabitNew from './containers/HabitNew';
import HabitShow from './containers/HabitShow';
import Calendar from './containers/Calendar';
import CompletedHabit from './containers/CompletedHabit';
import Nav from './components/Nav';
import './App.css';

class App extends Component {



  render() {
  return (
    <Router>
      <Nav />
      <div className="container" align="center">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/habit_objects/new" component={ HabitNew } />
          <Route exact path="/habit_objects" component={ Calendar } />
          <Route exact path="/habit_objects/:id" component={ HabitShow } />
          <Route exact path="/completed_habits" component={ CompletedHabit } />
         
        </Switch>
      </div>
  </Router>
    );
  }
}

export default App;
