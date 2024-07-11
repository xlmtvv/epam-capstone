module.exports = {
    hooks: {
      'pre-push': 'npm run test:coverage && npm run lint-staged',
    },
  };