function login(req, db) {
  return new Promise((resolve, reject) => {
    db.User.findOne({
      email: req.body.email,
      password: req.body.password,
    }).exec((err, user) => {
      if (err) {
        return reject(new Error('Internal Server Error'));
      }
      if (!user) {
        return reject(new Error('The email or password is incorrect'));
      }
      db.currentUser[user._id] = user;
      resolve(user);
    });
  });
}

export default login;
