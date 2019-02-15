import React, { Component } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Login from './components/login';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    );
  }
}

export default App;
