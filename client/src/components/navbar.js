import React from 'react';
import { NavLink } from 'react-router-dom';

const navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper blue">
        <NavLink to="/" className="brand-logo center">
          Social-Aca
        </NavLink>
        <ul className="left hide-on-med-and-down">
          <li>
            <NavLink activeClassName="grey" to="/home">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="grey" to="/workshop">
              TD
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="grey" to="/profile">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="grey"
              to="/login"
              className="waves-effect orange  waves-light btn"
            >
              se connecter
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="grey"
              to="/register"
              className="waves-effect green  waves-light btn"
            >
              s'enregistrer
            </NavLink>
          </li>
          <li>
            <a className="waves-effect red  waves-light btn">se deconnecter</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
