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
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Titre</label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="exampleFormControlInput1"
            value={form.title}
            onChange={this.onInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            Description de problème
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={this.onInputChange}
            name="body"
            value={form.body}
          />
        </div>
        <button className="btn btn-primary">Poster</button>
        {message && (
          <div className="alert alert-warning" role="alert">
            {message}
          </div>
        )}
      </form>
    );
  }
}
