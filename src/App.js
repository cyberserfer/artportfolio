import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import {
  Materials,
  Style,
  Genre,
  Year,
  Home
} from './components';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">

            <h1 className="App-title">Paul Buss - Art Portfolio</h1>
          </header>
          <ul className="navMenu">
            <li className=""><NavLink to="/">Home</NavLink></li>
            <li className=""><NavLink to="/materials">Materials</NavLink></li>
            <li className=""><NavLink to="/style">Style</NavLink></li>
            <li className=""><NavLink to="/genre">Genre</NavLink></li>
            <li className=""><NavLink to="/year">Year</NavLink></li>
          </ul>
          <Switch>
          <Route exact path="/materials" component={Materials} />
          <Route path="/style" component={Style} />
          <Route path="/genre" component={Genre} />
          <Route path="/year" component={Year} />
          <Route exact path="/" component={Home} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
