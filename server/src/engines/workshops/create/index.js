function create(req, db, generateErrorMessage) {
  return new Promise((resolve, reject) => {
    db.Workshop.create({
      ...req.body,
      author: db.currentUser[req.get('token')],
    })
      .then((workshop) => resolve(workshop))
      .catch((err) => {
        err.message = generateErrorMessage(err);
        reject(err);
      });
  });
}

export default create;
