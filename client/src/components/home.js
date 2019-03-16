import React, { Component } from 'react';
import * as ClientAPI from '../ClientAPI';

import PostsList from './postsList';

export default class home extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    ClientAPI.getPostsList().then((res) => {
      this.setState({ posts: res.data });
    });
  }

  onVote = (postId, payload) => {
    const newPosts = [...this.state.posts];
    const post = newPosts.find((res) => {
      return res._id === postId;
    });
    post.votes.push({
      ...payload,
      author: JSON.parse(localStorage.getItem('currentUser')),
    });
    ClientAPI.votePost(post._id, payload).then((res) => {
      this.setState({
        post: newPosts,
      });
    });
  };

  render() {
    return (
      <div>
        <h2>Les préoccupations</h2>
        {this.state.posts[0] && (
          <PostsList
            onVote={this.onVote}
            postNavigable={true}
            posts={this.state.posts}
            type="post"
          />
        )}
      </div>
    );
  }
}
