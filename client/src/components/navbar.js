import React from 'react';

function Navbar(props) {
  return (
    <nav>
      <div className="nav-wrapper blue">
        <a href="#!" className="brand-logo center">
          Social-Aca
        </a>
        <ul className="left hide-on-med-and-down">
          <li className="active">
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">TD</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a className="waves-effect orange  waves-light btn">se connecter</a>
          </li>
          <li>
            <a className="waves-effect green  waves-light btn">s'enregistrer</a>
          </li>
          <li>
            <a className="waves-effect red  waves-light btn">se deconnecter</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
