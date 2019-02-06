function retrieve(req, db) {
  return new Promise((resolve, reject) => {
    db.Post.findById(req.params.postId).exec((error, post) => {
      if (!post) {
        reject(new Error('Not Found'));
      }

      resolve(post);
    });
  });
}

export default retrieve;
