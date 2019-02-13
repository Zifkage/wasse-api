function create(req, db, generateErrorMessage) {
  return new Promise((resolve, reject) => {
    const response = new db.Response(req.body);
    response.author = req.get('cookie').split(';')[0];
    response.post = req.params.postId;
    response.save((err, response) => {
      if (err) {
        err.message = generateErrorMessage(err);
        reject(err);
      }

      resolve(response);
    });
  });
}

export default create;
