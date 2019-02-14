function solve(req, res, db, solve) {
  return solve(req, db)
    .then((result) => {
      res.status(200);
      res.set('Content-Type', 'text/plain');
      res.send(result);
    })
    .catch((err) => {
      res.set('Content-Type', 'application/json');
      switch (err.type) {
        case 'postNotFound': {
          res.status(404);
          res.json({ message: 'Post Not Found' });
        }
        case 'notPostOwner': {
          res.status(401);
          res.json({ message: 'The user is not the post author' });
        }
        case 'alreadySolve': {
          res.status(400);
          res.json({ message: 'The post has been already solved' });
        }
        default: {
          res.status(500);
          res.json({ message: 'Internal Server Error' });
        }
      }
    });
}

export default solve;
