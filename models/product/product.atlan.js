function product() {
  return {
    schema: {
      category: {
        type: 'ref',
        model: 'category',
        required: true
      },
      model: {
        type: 'string',
        required: true
      },
      color: {
        type: 'string',
        required: true
      },
      gender: {
        type: 'string',
        required: true
      },
      age: {
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

module.exports = product;
