import React from 'react';
import Post from './post';

const postsList = ({ posts }) => {
  return (
    <div>
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </div>
  );
};

export default postsList;
