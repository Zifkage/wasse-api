import React, { Component } from 'react';
import moment from 'moment';

import * as ClientAPI from '../ClientAPI';

export default class workshop extends Component {
  state = {
    participe: false,
    participants: [...this.props.workshop.participants],
  };

  onParticipate = () => {
    let currentUser = localStorage.getItem('currentUser');
    if (currentUser) currentUser = JSON.parse(currentUser);
    const {
      workshop: { _id },
    } = this.props;
    ClientAPI.participateWorkshop(_id)
      .then((res) => {
        console.log(res.data);
        this.setState({
          participe: true,
          participants: [...this.state.participants, currentUser],
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { workshop, loc } = this.props;
    const { participants } = this.state;

    let currentUser = localStorage.getItem('currentUser');
    if (currentUser) currentUser = JSON.parse(currentUser);
    const userParticipate = workshop.participants.find(
      (p) => p._id === currentUser._id,
    );
    moment.locale('fr');
    return (
      <div>
        <div className="card border-dark mb-3">
          <div className="card-header">
            {' '}
            <img
              style={{ width: '50px' }}
              src="/costar.jpg"
              className="img-thumbnail"
              alt="costar"
            />
            <span>{workshop.author.email}</span>
          </div>
          <div className="card-body text-dark">
            <h5 className="card-title">{workshop.title}</h5>
            <p className="card-text">{workshop.description}</p>
            <div className="wdetail">
              <span>
                <i className="far fa-clock" />
                {workshop.duration}
              </span>
              <span>
                <i className="far fa-calendar-alt" />
                {moment(workshop.dateStart).format('LLLL')}
              </span>
            </div>
            {currentUser._id !== workshop.author._id && (
              <button
                onClick={() =>
                  userParticipate || this.state.participe
                    ? ''
                    : this.onParticipate()
                }
                className={`btn ${
                  userParticipate || this.state.participe
                    ? 'btn-success'
                    : 'btn-primary'
                }`}
              >
                {userParticipate || this.state.participe
                  ? 'Participe'
                  : 'Participer'}
              </button>
            )}
          </div>
        </div>
        {loc !== 'list' && (
          <div>
            <h3>{`${this.state.participants.length} participant(s)`}</h3>
            <ul className="list-group">
              {participants.map((p) => (
                <li
                  className="list-group-item list-group-item-dark"
                  key={p._id}
                >
                  <img
                    style={{ width: '50px' }}
                    src="/costar.jpg"
                    className="img-thumbnail"
                    alt="costar"
                  />
                  <span>{p.email}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
