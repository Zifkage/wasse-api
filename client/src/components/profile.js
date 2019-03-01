import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import CreatePost from './createPost';
import CreateWorkshop from './createWorkshop';

const profile = ({ match }) => {
  return (
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
          activeClassName="active"
          to={`${match.url}/create-post`}
          className="list-group-item list-group-item-action "
        >
          Poster un problème
        </NavLink>
        <NavLink
          activeClassName="active"
          to={`${match.url}/create-workshop`}
          className="list-group-item list-group-item-action"
        >
          Créer un TD
        </NavLink>
      </div>
      <div className="col-8">
        <Route exact path={`${match.url}`} render={() => <div>Profile</div>} />
        <Route path={`${match.url}/create-post`} component={CreatePost} />
        <Route
          path={`${match.url}/create-workshop`}
          component={CreateWorkshop}
        />
      </div>
    </div>
  );
};

export default profile;
