const { hashPassword } = require('../../services/passwords');

function user() {
  return {
    schema: {
      name: {
        type: 'string',
        required: true
      },
      lastName: {
        type: 'string',
        required: true
      },
      hash: {
        type: 'string',
        required: true
      },
      userKind: {
        type: 'string' /* customer, seller, manager, owner */,
        required: true
      }
    },
    hooks: {
      post: {
        async before(req, res, next) {
          if (req.body.password) {
            req.body.hash = await hashPassword(req.body.password);
            delete req.body.password;
          }
          next();
        }
      },
      patch: {
        async before(req, res, next) {
          if (req.body.password) {
            req.body.hash = await hashPassword(req.body.password);
            delete req.body.password;
          }
          next();
        }
      }
    }
  };
}

module.exports = user;
