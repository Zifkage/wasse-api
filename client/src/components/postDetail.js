import React, { Component } from 'react';
import * as ClientAPI from '../ClientAPI';
import { withRouter } from 'react-router-dom';
import Post from './post';
import PostsList from './postsList';

export default withRouter(
  class postPage extends Component {
    state = {
      isLoading: true,
      post: {},
      form: {
        body: '',
      },
    };

    componentDidMount() {
      const {
        match: { params },
      } = this.props;
      ClientAPI.getPost(params.postId).then((res) => {
        this.setState({ post: res.data, isLoading: false });
      });
    }

    onInputChange = (e) => {
      this.setState({ form: { body: e.target.value } });
    };

    render() {
      const { post, form } = this.state;
      return (
        <div>
          {this.state.isLoading ? (
            'Chargement'
          ) : (
            <div>
              <h5>
                <i className="material-icons medium">account_circle</i>-
                <span> {post.author.email}</span>
              </h5>
              <div>
                <Post post={post} />
              </div>
              <br />
              <br />
              <h4>{post.responses.length} réponse(s)</h4>
              <div>
                <form class="col s12">
                  <div className="row">
                    <div className="input-field col s6">
                      <i className="material-icons prefix">mode_edit</i>
                      <textarea
                        placeholder="Entrer votre réponse"
                        id="icon_prefix2"
                        className="materialize-textarea"
                        value={form.body}
                        onChange={this.onInputChange}
                      />
                    </div>
                  </div>
                  <button className="btn">envoyer</button>
                </form>
              </div>
              <br />
              <PostsList posts={post.responses} />
            </div>
          )}
        </div>
      );
    }
  },
);
