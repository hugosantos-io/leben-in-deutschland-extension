module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended'
  ],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    // Adicione regras específicas do seu projeto aqui
  }
};