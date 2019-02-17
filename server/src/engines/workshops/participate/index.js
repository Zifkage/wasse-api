function participate(req, db) {
  return new Promise((resolve, reject) => {
    const user = db.currentUser[req.get('token')];
    db.Workshop.findById(req.params.workshopId).then((workshop) => {
      if (!workshop) {
        return reject({ type: 'workshopNotFound' });
      }

      if (
        workshop.participants.find(
          (p) => p._id.toString() == user._id.toString(),
        )
      ) {
        return reject({ type: 'alreadyParticipate' });
      }

      workshop.participants.push(user);

      workshop.save((err) => {
        if (err) {
          return reject();
        }

        resolve('OK');
      });
    });
  });
}

export default participate;
