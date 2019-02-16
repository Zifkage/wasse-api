import React, { Component } from 'react';

class login extends Component {
  state = {
    form: {
      email: '',
      password: '',
    },
  };

  onInputCange = ({ target }) => {
    switch (target.type) {
      case 'email': {
        this.setState({ form: { email: target.value } });
        break;
      }
      case 'password': {
        this.setState({ form: { password: target.value } });
        break;
      }
      default: {
        return;
      }
    }
  };

  render() {
    return (
      <div>
        <h2>Se connecter</h2>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  onChange={this.onInputCange}
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
                  onChange={this.onInputCange}
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
