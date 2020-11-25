import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Login from '../login'
import Home from '../home'
import css from './app.module.css';

class App extends React.Component {
  render = () => {
    return (
      <div className={css.container}>
        <Router>
          <Switch>
            <Route
              path="/login" 
              component={Login}
            />
            <Route
              path="/home" 
              component={Home}
            />
            <Redirect to="/login" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
