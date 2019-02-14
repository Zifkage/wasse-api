function vote(req, db, generateErrorMessage) {
  return new Promise((resolve, reject) => {
    const user = db.currentUser[req.get('cookie').split(';')[0]];
    db.Post.findOne({ _id: req.params.postId }).then((post) => {
      if (!post) {
        return reject({ type: 'postNotFound' });
      }
      // Find the the response we want to apply vote
      const response = post.responses.find(
        (res) => res._id == req.params.responseId,
      );

      if (!response) {
        return reject({ type: 'responseNotFound' });
      }

      // Find user vote
      const userVote = response.votes.find(
        (vote) => vote.author._id.toString() === user._id.toString(),
      );

      // Checking to avoid a user to vote than once peer response
      if (userVote) {
        return reject({ type: 'alreadyVote' });
      }

      // The user was not vote before we can save the vote
      response.votes.push(new db.Vote({ type: req.body.type, author: user }));
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
