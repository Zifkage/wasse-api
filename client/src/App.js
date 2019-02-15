import React, { Component } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
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
        </div>
      </div>
    );
  }
}

export default App;
