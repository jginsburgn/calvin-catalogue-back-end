function store() {
  return {
    schema: {
      mall: {
        type: 'string',
        required: true
      },
      address: {
        type: 'object',
        required: true,
        children: {
          innerLocation: {
            type: 'string',
            required: true
          },
          number: {
            type: 'string',
            required: true
          },
          street: {
            type: 'string',
            required: true
          },
          neighborhood: {
            type: 'string',
            required: true
          }
        }
      },
      stock: {
        type: 'array',
        elements: {
          product: {
            type: 'object',
            required: true,
            children: {
              stock: {
                type: 'number',
                required: true
              },
              product: {
                type: 'ref',
                required: true,
                model: 'product'
              }
            }
          }
        }
      }
    }
  };
}

module.exports = store;
