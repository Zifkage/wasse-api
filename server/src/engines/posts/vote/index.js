function vote(req, db, generateErrorMessage) {
  const user = db.currentUser[req.get('cookie').split(';')[0]];
  return new Promise((resolve, reject) => {
    db.Post.findById(req.params.postId).then((post) => {
      if (!post) {
        return reject({ type: 'postNotFound' });
      }
      const userVote = post.votes.find(
        (vote) => vote.author._id.toString() === user._id.toString(),
      );
      if (userVote) {
        return reject({ type: 'alreadyVote' });
      }

      post.votes.push(new db.Vote({ type: req.body.type, author: user }));
      post.save((err) => {
        if (err) {
          err.message = generateErrorMessage(err);
          return reject(err);
        }

        resolve('OK');
      });
    });
  });
}

export default vote;
