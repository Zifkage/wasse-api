function create(req, db, generateErrorMessage) {
  return new Promise((resolve, reject) => {
    db.Post.findOne({ _id: req.params.postId })
      .then((post) => {
        const response = new db.Response(req.body);
        response.author = db.currentUser[req.get('cookie').split(';')[0]];
        post.responses.push(response);

        post.save((err) => {
          if (err) {
            throw err;
          }
          resolve('OK');
        });
      })
      .catch((err) => {
        err.message = generateErrorMessage(err);
        reject(err);
      });
  });
}

export default create;
