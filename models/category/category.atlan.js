function category() {
  return {
    schema: {
      name: {
        type: 'string',
        required: true
      },
      multimedia: {
        type: 'string',
        required: true
      }
    },
    hooks: {
      post: {
        before(req, res, next) {
          req.body.multimedia =
            'http://calvin.tenatek.com/' +
            (Math.floor(Math.random() * 10) + 1) +
            '.jpg';
          next();
        }
      }
    }
  };
}

module.exports = category;
