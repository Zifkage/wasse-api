function retrieve(req, res, db, retrieve) {
  return retrieve(req, db)
    .then((result) => {
      res.status(200);
      res.set('Content-Type', 'application/json');
      res.json(result);
    })
    .catch((err) => {
      res.set('Content-type', 'application/json');
      if (err.type && err.type === 'workshopNotFound') {
        res.status(404);
        return res.json({ message: 'Workshop Not Found' });
      }

      res.status(500);
      res.json({ message: 'Internal Server Error' });
    });
}

export default retrieve;
