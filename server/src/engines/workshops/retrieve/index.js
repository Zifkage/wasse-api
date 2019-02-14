function retrieve(req, db) {
  return new Promise((resolve, reject) => {
    db.Workshop.findById(req.params.workshopId)
      .then((workshop) => {
        if (!workshop) {
          return reject({ type: 'workshopNotFound' });
        }
        resolve(workshop);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default retrieve;
