import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import CreatePost from './createPost';
import * as ClientAPI from '../ClientAPI';
import CreateWorkshop from './createWorkshop';
import UserInfo from './userInfo';

const resolveFollowUserQuery = () => (state) => {
  let currentUser = localStorage.getItem('currentUser');
  if (currentUser) currentUser = JSON.parse(currentUser);

  return {
    ...state,
    userInfo: {
      ...state.userInfo,
      followers: [...state.userInfo.followers, currentUser],
    },
  };
};

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

  onFollow = (userId) => {
    ClientAPI.followUser(userId)
      .then((res) => {
        console.log(res.data);
        this.setState(resolveFollowUserQuery());
      })
      .catch((err) => console.log(err));
  };

  render() {
    let currentUser = localStorage.getItem('currentUser');
    if (currentUser) currentUser = JSON.parse(currentUser);
    const {
      userInfo: { followers, following },
    } = this.state;
    let followerIndex = null;
    let alreadySub = null;
    if (this.state.userInfo) {
      followerIndex = followers.findIndex((f) => f._id === currentUser._id);
      alreadySub = followerIndex === -1 ? false : true;
    }
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
          <NavLink
            exact
            activeClassName="active"
            to={`${match.url}/followers`}
            className="list-group-item list-group-item-action "
          >
            Abonnées
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            to={`${match.url}/following`}
            className="list-group-item list-group-item-action "
          >
            Abonnement
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
              return (
                <UserInfo
                  alreadySub={alreadySub}
                  onFollow={this.onFollow}
                  user={this.state.userInfo}
                />
              );
            }}
          />
          <Route path={`${match.url}/create-post`} component={CreatePost} />
          <Route
            path={`${match.url}/create-workshop`}
            component={CreateWorkshop}
          />
          <Route
            path={`${match.url}/followers`}
            render={() => (
              <div>
                <h3>{`${followers.length} abonné(s)`}</h3>
                <ul className="list-group">
                  {followers.map((p) => (
                    <li
                      className="list-group-item list-group-item-success"
                      key={p._id}
                    >
                      <img
                        style={{ width: '50px' }}
                        src="/costar.jpg"
                        className="img-thumbnail"
                        alt="costar"
                      />
                      <NavLink to={`/profile/${p._id}`}>{p.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          />
          <Route
            path={`${match.url}/following`}
            render={() => (
              <div>
                <h3>{`${following.length} abonnement(s)`}</h3>
                <ul className="list-group">
                  {following.map((p) => (
                    <li
                      className="list-group-item list-group-item-success"
                      key={p._id}
                      style={{ marginBottom: '10px' }}
                    >
                      <img
                        style={{ width: '50px' }}
                        src="/costar.jpg"
                        className="img-thumbnail"
                        alt="costar"
                      />
                      <NavLink to={`/profile/${p._id}`}>{p.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          />
        </div>
      </div>
    ) : (
      <div>Chargement</div>
    );
  }
}

export default profile;
