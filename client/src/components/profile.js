import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import CreatePost from './createPost';
import * as ClientAPI from '../ClientAPI';
import CreateWorkshop from './createWorkshop';
import UserInfo from './userInfo';

class profile extends Component {
  state = {
    isLoading: true,
    userInfo: '',
  };

  componentDidMount() {
    const {
      match: {
        params: { userId },
      },
    } = this.props;
    ClientAPI.getUser(userId)
      .then((res) => {
        this.setState({
          isLoading: false,
          userInfo: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let currentUser = localStorage.getItem('currentUser');
    if (currentUser) currentUser = JSON.parse(currentUser);
    const { match } = this.props;
    return !this.state.isLoading ? (
      <div className="row">
        <div className="col-4 list-group-item list-group-item-action">
          <NavLink
            exact
            activeClassName="active"
            to={`${match.url}`}
            className="list-group-item list-group-item-action "
          >
            Info utilisateur
          </NavLink>
          {this.state.userInfo._id === currentUser._id && (
            <NavLink
              activeClassName="active"
              to={`${match.url}/create-post`}
              className="list-group-item list-group-item-action "
            >
              Poster un problème
            </NavLink>
          )}
          {this.state.userInfo._id === currentUser._id && (
            <NavLink
              activeClassName="active"
              to={`${match.url}/create-workshop`}
              className="list-group-item list-group-item-action"
            >
              Créer un TD
            </NavLink>
          )}
        </div>
        <div className="col-8">
          <Route
            exact
            path={`${match.url}`}
            render={() => {
              return <UserInfo user={this.state.userInfo} />;
            }}
          />
          <Route path={`${match.url}/create-post`} component={CreatePost} />
          <Route
            path={`${match.url}/create-workshop`}
            component={CreateWorkshop}
          />
        </div>
      </div>
    ) : (
      <div>Chargement</div>
    );
  }
}

export default profile;
