module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0,
    'semi': [2, 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    'indent': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
