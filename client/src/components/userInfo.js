import React from 'react';

const userInfo = ({ user, onFollow, alreadySub }) => {
  let currentUser = JSON.parse(localStorage.getItem('currentUser'));

  return (
    <div className="card border-primary mb-3">
      <div className="card-header">
        {user.name}
        {'   '}
        {user._id !== currentUser._id && !alreadySub && (
          <button
            onClick={() => onFollow(user._id)}
            className="btn btn-primary"
          >
            Suivre
          </button>
        )}
        {alreadySub && (
          <button className="btn btn-danger"> Ne plus suivre </button>
        )}
      </div>
      <div className="card-body ">
        <h5 className="card-title">Bio : </h5>
        <p className="card-text">{user.bio}</p>
        <h5 className="card-title">Contact : </h5>
        <p className="card-text">{user.contact}</p>
        <h5 className="card-title">Email : </h5>
        <p className="card-text">{user.email}</p>
      </div>
    </div>
  );
};

export default userInfo;
