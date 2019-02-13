function checkUserAuth(db) {
  return (req, res, next) => {
    const userId = req.get('cookie').split(';')[0] || 'noId';
    if (!db.currentUser[userId]) {
      res.status(401);
      res.set('Content-Type', 'application/json');
      return res.json({ message: 'User must be authenticated' });
    }
    next();
  };
}

export default checkUserAuth;
