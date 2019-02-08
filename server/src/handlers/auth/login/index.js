function login(req, res, db, login) {
  return login(req, db)
    .then((result) => {
      res.status(200);
      res.set('Content-Type', 'application/json');
      res.json(result);
    })
    .catch((err) => {
      res.status(400);
      res.set('Content-Type', 'application/json');
      res.json({ message: err.message });
    });
}

export default login;
