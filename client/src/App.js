import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import { Route } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Profile from './components/profile';
import Workshop from './components/workshop';
import PostDetail from './components/postDetail';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ marginTop: '70px' }} className="container">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile/:userId" component={Profile} />
          <Route path="/workshop" component={Workshop} />
          <Route path="/post/:postId" component={PostDetail} />
        </div>
      </div>
    );
  }
}

export default App;
