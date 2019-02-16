import React, { Component } from 'react';
import * as ClientAPI from '../ClientAPI';

class login extends Component {
  state = {
    form: {
      email: '',
      password: '',
    },
  };

  onInputChange = ({ target }) => {
    switch (target.type) {
      case 'email': {
        this.setState({
          form: { ...this.state.form, email: target.value },
        });
        break;
      }
      case 'password': {
        this.setState({
          form: { ...this.state.form, password: target.value },
        });
        break;
      }
      default: {
        return;
      }
    }
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    ClientAPI.login(this.state.form)
      .then((response) => {
        localStorage.setItem('currentUser', JSON.stringify(response.data));
        this.props.history.push('/');
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h2>Se connecter</h2>
        <div className="row">
          <form onSubmit={this.onFormSubmit} className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  onChange={this.onInputChange}
                  id="email"
                  type="email"
                  className="validate"
                  placeholder="Email"
                  value={this.state.form.email}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  onChange={this.onInputChange}
                  id="password"
                  type="password"
                  className="validate"
                  placeholder="Mot de passe"
                  value={this.state.form.password}
                />
              </div>
            </div>
            <button className="btn">valider</button>
          </form>
        </div>
      </div>
    );
  }
}

export default login;
