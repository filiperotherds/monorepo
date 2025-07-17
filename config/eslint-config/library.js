/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@rocketseat/eslint-config/react'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
  },
}

/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
  ],
  extends: [
    '@rocketseat/eslint-config/node',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'simple-import-sort/imports': 'error',
  },
}