function participate(req, res, db, participate) {
  return participate(req, db)
    .then((result) => {
      res.status(200);
      res.set('Content-Type', 'text/plain');
      res.send(result);
    })
    .catch((err) => {
      res.set('Content-Type', 'application/json');

      if (err.type && err.type === 'alreadyParticipate') {
        res.status(400);
        res.json({ message: 'User is already register to the workshop' });
      }
      res.status(500);
      res.json({ message: 'Internal Server Error' });
    });
}

export default participate;
