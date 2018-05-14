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
        type: 'array',
        required: true,
        elements: {
          type: 'object',
          children: {
            kind: {
              type: 'string',
              required: true
            },
            url: {
              type: 'file',
              required: true
            }
          }
        }
      }
    }
  };
}

module.exports = product;
