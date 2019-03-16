import React from 'react';

const userInfo = ({ user }) => {
  return (
    <div className="card border-primary mb-3">
      <div className="card-header"> {user.name} </div>
      <div className="card-body text-primary">
        <h5 className="card-title">Primary card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default userInfo;