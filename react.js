module.exports = {
  extends: 'doctolib',
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'jsx-quotes': 'error',

    'strict': ['error', 'never'],

    'react/display-name': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-curly-spacing': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': ['error', {maximum: 3}],
    'react/jsx-no-bind': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'error',
    'react/jsx-no-target-blank': 'off',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': 'off',
    'react/jsx-space-before-closing': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-comment-textnodes': 'error',
    'react/no-danger': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-multi-comp': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'off',
    'react/no-is-mounted': 'error',
    'react/no-unknown-property': 'error',
    'react/no-render-return-value': 'error',
    'react/prop-types': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': 'off',
    'react/react-in-jsx-scope': 'error',
    'react/require-extension': 'error',
    'react/require-render-return': 'error',
    'react/require-optimization': 'off',
    'react/self-closing-comp': 'error',
    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
        'render',
      ],
      groups: {
        lifecycle: [
          'displayName',
          'scope',
          'getObservables',
          'propTypes',
          'defaultProps',
          'getDefaultProps',
          'contextTypes',
          'childContextTypes',
          'obsTypes',
          'mixins',
          'constructor',
          'state',
          'getInitialState',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
        ],
      },
    }],
    'react/sort-prop-types': 'off',
    'react/wrap-multilines': 'error',
  },
  plugins: [
    'react',
  ],
};
