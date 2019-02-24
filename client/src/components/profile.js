import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import CreatePost from './createPost';

const profile = ({ match }) => {
  console.log(match.url);
  return (
    <div>
      <div className="collection ">
        <NavLink
          exact
          activeClassName="active"
          to={`${match.url}`}
          className="collection-item "
        >
          Info utilisateur
        </NavLink>
        <NavLink
          activeClassName="active"
          to={`${match.url}/create-post`}
          className="collection-item "
        >
          Poster un problème
        </NavLink>
        <NavLink
          activeClassName="active"
          to={`${match.url}/create-workshop`}
          className="collection-item"
        >
          Créer un TD
        </NavLink>
      </div>
      <Route exact path={`${match.url}`} render={() => <div>Profile</div>} />
      <Route path={`${match.url}/create-post`} component={CreatePost} />
    </div>
  );
};

export default profile;
