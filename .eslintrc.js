// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "indent": [1, "tab"],
    "no-tabs": "off",
    "no-undef": 0,
    "no-unused-vars": 0,
    'no-eval': 0,
    "eqeqeq": 0,
    "one-var": 0,
    "no-useless-escape": 0,
    "camelcase": 0,
    "no-unneeded-ternary": 0,
    "no-extra-boolean-cast": 0,
    "no-redeclare": 0,
    "comma-dangle": "off"
  }
}
