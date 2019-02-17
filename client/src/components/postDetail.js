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
      isSending: false,
      message: '',
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

    onSubmit = (e) => {
      const { post, form } = this.state;
      e.preventDefault();
      this.setState({ isSending: true });
      ClientAPI.createResponse(post._id, form).then((res) => {
        this.setState({
          isSending: false,
          message: 'Votre message a été bien envoyé',
          form: { body: '' },
        });
      });
    };

    render() {
      const { post, form, message } = this.state;
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
                {this.state.isSending ? (
                  'Envoie en cours...'
                ) : (
                  <form onSubmit={this.onSubmit} className="col s12">
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
                    {message && (
                      <div className="collection">
                        <span className="collection-item active">
                          {message}
                        </span>
                      </div>
                    )}
                    <button className="btn">envoyer</button>
                  </form>
                )}
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
