import React, { Component } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Profile from './components/profile';
import Workshop from './components/workshop';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/workshop" component={Workshop} />
        </div>
      </div>
    );
  }
}

export default App;
