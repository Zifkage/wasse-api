function create(req, db, generateErrorMessage) {
  return new Promise((resolve, reject) => {
    const workshop = new db.Workshop(req.body);
    workshop.author = db.currentUser[req.get('cookie').split(';')[0]];

    workshop.save((err, workshop) => {
      if (err) {
        err.message = generateErrorMessage(err);
        return reject(err);
      }

      resolve(workshop);
    });
  });
}

export default create;
