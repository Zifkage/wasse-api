function list(db) {
  return new Promise((resolve, reject) => {
    db.Workshop.find()
      .then((workshops) => {
        resolve(workshops);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default list;
