function follow(req, res, db, follow) {
  return follow(req, db)
    .then((result) => {
      res.status(201);
      res.set('Content-Type', 'text/plain');
      res.send(result);
    })
    .catch((err) => {
      res.status(500);
      res.set('Content-Type', 'application/json');
      return res.send(err);
    });
}

export default follow;
