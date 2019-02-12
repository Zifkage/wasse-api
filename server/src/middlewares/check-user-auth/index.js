function checkUserAuth(db) {
  return (req, res, next) => {
    const userId = req.get('cookie').split(';')[0] || 'noId';
    if (!db.currentUser[userId]) {
      return res.json({ message: 'User must be authenticated' });
    }
    next();
  };
}

export default checkUserAuth;
