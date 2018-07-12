module.exports = {
  root: true,
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'no-await-in-loop': 'off',
    'no-continue': 'off',
    'no-plusplus': 'off'
  },
  env: {
    node: true
  },
  parserOptions: {
    sourceType: 'script',
    ecmaVersion: 2017
  }
};
