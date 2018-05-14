function setHeaders(app) {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PATCH, DELETE');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Origin', /* 'http://empleozapopan.mx' */ '*');
    next();
  });
}

module.exports = { setHeaders };
