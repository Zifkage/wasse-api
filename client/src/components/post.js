import React from 'react';
import { Link } from 'react-router-dom';

const post = (props) => {
  let solution = null;
  if (props.post.responses) {
    solution = props.post.responses.find((res) => res.solution);
  }
  const user = JSON.parse(localStorage.getItem('currentUser'));
  let userVote = null;
  if (user) {
    userVote = props.post.votes.find((v) => {
      return v.author._id === user._id;
    });
  }
  const upCount = props.post.votes.filter((v) => {
    return v.type === 'up';
  }).length;
  const downCount = props.post.votes.filter((v) => {
    return v.type === 'down';
  }).length;
  return (
    <div>
      <div
        style={{ wordWrap: 'break-word', color: 'white' }}
        className="col s12 m8"
      >
        <div className="card  darken-1">
          <div className=" grey  card-content ">
            <b>
              <h4
                style={{
                  borderBottom: '2px solid orange',
                  paddingBottom: '5px',
                }}
              >
                {props.post.title}
                {solution ? '-[Résolu]' : ''}
              </h4>
            </b>
            {props.navigable ? (
              <p>
                <Link
                  style={{ color: 'white', display: 'block' }}
                  to={`/post/${props.post._id}`}
                >
                  {props.post.body}
                </Link>
              </p>
            ) : (
              <p>{props.post.body}</p>
            )}
          </div>
          <button
            onClick={() => props.onVote(props.post._id, { type: 'up' })}
            className={`waves-effect ${
              userVote && userVote.type === 'up' ? 'green' : 'grey'
            } waves-light btn-small`}
          >
            <i className="material-icons ">arrow_upward</i>
          </button>
          <button
            className={`waves-effect ${
              upCount - downCount > 0 ? 'green' : 'red'
            }  waves-light btn-small`}
          >
            {upCount - downCount}
          </button>
          <button
            onClick={() => props.onVote(props.post._id, { type: 'down' })}
            className={`waves-effect ${
              userVote && userVote.type === 'down' ? 'red' : 'grey'
            } waves-light btn-small`}
          >
            <i className="material-icons ">arrow_downward</i>
          </button>
          {props.type === 'response' && props.postAuthor._id === user._id && (
            <button
              onClick={() => props.onSolve(props.post._id)}
              className={`waves-effect ${props.post.solution ? 'blue' : 'grey'}
              waves-light btn-small`}
            >
              <i className="material-icons ">done</i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default post;
