module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
    "mocha": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "indent": ["error", 2],
    "comma-spacing": ["error", { before: false, after: true }],
  }
};
