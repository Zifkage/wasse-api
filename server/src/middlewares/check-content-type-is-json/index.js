function checkContentTypeIsJson(req, res, next) {
  if (
    ['POST', 'PATCH', 'PUT'].includes(req.method) &&
    !req.headers['content-type'].includes('application/json')
  ) {
    res.status(415);
    res.set('Content-Type', 'application/json');
    return res.json({
      message: 'The "Content-Type" header must always be "application/json"'
    });
  }
  next();
}

export default checkContentTypeIsJson;
