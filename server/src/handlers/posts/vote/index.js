function vote(req, res, db, vote, generateErrorMessage) {
  return vote(req, db, generateErrorMessage)
    .then((result) => {
      res.status(201);
      res.set('Content-Type', 'text/plain');
      res.send(result);
    })
    .catch((err) => {
      res.set('Content-Type', 'application/json');
      switch (err.type) {
        case 'alreadyVote': {
          res.status(400);
          res.json({ message: 'The user already vote' });
        }
        case 'postNotFound': {
          res.status(404);
          res.json({ message: 'Post not found' });
        }
        default: {
          res.status(500);
          res.json({ message: 'Internal Server Error' });
        }
      }
    });
}

export default vote;
