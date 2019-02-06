function list(db) {
  return new Promise((resolve, reject) => {
    db.Post.find().exec((err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
}

export default list;
