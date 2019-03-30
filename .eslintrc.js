module.exports = {
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    amd: true,
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    'arrow-parens': ['warn', 'as-needed'],
    'comma-dangle': ['warn'],
    'eqeqeq': ['warn'],
    'indent': ['warn', 2, { 'SwitchCase': 1 }],
    'keyword-spacing': ['error', { 'before': true }],
    'linebreak-style': ['error', 'unix'],
    'no-console': ['off'],
    'no-unused-vars': ['warn', { 'vars': 'all', 'args': 'after-used' }],
    'object-shorthand': ['warn', 'properties'],
    'prefer-arrow-callback': ['warn'],
    'prefer-const': ['warn'],
    'quotes': ['warn', 'single'],
    'semi': ['error', 'always'],
    'strict': ['warn', 'never']
  }
};
