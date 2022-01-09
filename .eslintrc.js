module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "linebreak-style": 0,
    "import/prefer-default-export": 0,
    "no-plusplus": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "radix": 0,
    "no-param-reassign": 0,
    "arrow-parens": 0
  },
};
