function category() {
  return {
    schema: {
      name: {
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

module.exports = category;
