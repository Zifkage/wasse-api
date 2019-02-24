import React, { Component } from 'react';
import * as ClientAPI from '../ClientAPI';

export default class createPost extends Component {
  state = {
    form: {
      title: '',
      body: '',
    },
    message: '',
  };

  onInputChange = ({ target }) => {
    switch (target.name) {
      case 'title': {
        this.setState({
          form: { ...this.state.form, title: target.value },
        });
        break;
      }
      case 'body': {
        this.setState({
          form: { ...this.state.form, body: target.value },
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
    ClientAPI.createPost(this.state.form)
      .then((response) => {
        this.setState({
          form: {
            title: '',
            body: '',
          },
          message: 'Problème poster avec succès',
        });
      })
      .catch((err) => {
        this.setState({
          message: 'Tous les champs doivent être remplis.',
        });
        console.log(err);
      });
  };
  render() {
    const { form, message } = this.state;
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="input-field col s12">
            <input
              onChange={this.onInputChange}
              name="title"
              className="validate"
              placeholder="Titre"
              value={form.title}
            />
          </div>
          <div className="input-field col s12">
            <textarea
              onChange={this.onInputChange}
              name="body"
              placeholder="Description du problème"
              value={form.body}
            />
          </div>
          <button className="btn">Poster</button>
          {message && <span>{message}</span>}
        </form>
      </div>
    );
  }
}
