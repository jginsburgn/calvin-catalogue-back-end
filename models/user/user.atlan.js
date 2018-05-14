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
    }
  };
}

module.exports = user;
