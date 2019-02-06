function deleteEngine(req, db) {
  return new Promise((resolve, reject) => {
    db.Post.deleteOne({ _id: req.query.postId }, function(err, result) {
      if (err) {
        reject(new Error('Internal Server Error'));
      } else if (result.n === 0) {
        reject(new Error('Not Found'));
      }

      resolve('ok');
    });
  });
}

export default deleteEngine;
