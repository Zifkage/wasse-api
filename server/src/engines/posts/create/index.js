function create(req, db, generateErrorMessage) {
  let post = new db.Post(req.body);
  post.author = req.get('cookie').split(';')[0];

  return new Promise((resolve, reject) => {
    post.save(function(err, post) {
      if (err) {
        err.message = generateErrorMessage(err);
        reject(err);
      }
      resolve(post);
    });
  });
}

export default create;
