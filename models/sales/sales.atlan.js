function sales() {
  return {
    schema: {
      seller: {
        type: 'ref',
        model: 'user'
      },
      buyer: {
        type: 'ref',
        model: 'user'
      },
      date: {
        type: 'string',
        required: true
      },
      products: {
        type: 'array',
        required: true,
        elements: {
          type: 'ref',
          model: 'product'
        }
      }
    }
  };
}

module.exports = sales;
