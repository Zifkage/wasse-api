function list(db) {
  return new Promise((resolve, reject) => {
    db.User.find()
      .then((users) => {
        resolve(users);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default list;
