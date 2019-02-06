function deletePost(req, res, db, deleteEngine) {
  return deleteEngine(req, db)
    .then((result) => {
      res.status(200);
      res.set('Content-Type', 'application/json');
      res.json(result);
    })
    .catch((err) => {
      res.set('Content-Type', 'application/json');
      if (err.message === 'Internal Server Error') {
        res.status(500);
        return res.json({ message: err.message });
      } else if (err.message === 'Not Found') {
        res.status(404);
        return res.json({ message: err.message });
      }
      res.send(err);
    });
}

export default deletePost;
