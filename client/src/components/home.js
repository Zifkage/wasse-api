import React, { Component } from 'react';
import * as ClientAPI from '../ClientAPI';

import PostsList from './postsList';

export default class home extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    ClientAPI.getPostsList().then((res) => {
      console.log(res.data);
      this.setState({ posts: res.data });
    });
  }

  render() {
    return (
      <div>
        <h2>Les préoccupations</h2>
        <PostsList posts={this.state.posts} />
      </div>
    );
  }
}
