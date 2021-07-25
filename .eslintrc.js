module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': ['warn'],
    semi: ['off'],
    quotes: ['off'],
    'jsx-a11y/anchor-is-valid': [
      'off',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'react/jsx-one-expression-per-line': ['off'],
    'react/jsx-curly-brace-presence': ['off'],
    'react/require-default-props': ['off'],
    'react/forbid-prop-types': ['off'],
    'no-unused-vars': ['warn'],
    'spaced-comment': ['warn'],
    'react/prefer-stateless-function': ['off'],
    'class-methods-use-this': ['off'],
    'import/order': ['off'],
    'import/first': ['off'],
    'import/last': ['off'],
    'import/no-named-as-default': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'object-curly-newline': ['off'],
  },
}
