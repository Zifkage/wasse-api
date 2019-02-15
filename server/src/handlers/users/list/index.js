function list(req, res, db, list) {
  return list(db)
    .then((result) => {
      res.status(200);
      res.set('Content-Type', 'application/json');
      res.json(result);
    })
    .catch((err) => {
      res.status(500);
      res.set('Content-Type', 'application/json');
      res.json({ message: 'Internal Server Error' });
    });
}

export default list;
