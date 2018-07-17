module.exports = {
  root: true,
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  plugins: [
    'html',
    'react'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeature: {
      jsx: true,
      modules: true
    }
  },
  settings: {
    react: {
      flowVersion: "0.53"
    },
    propWrapperFunctions: [ "forbidExtraProps" ]
  },
  globals: {
    document: true,
    fetch: true,
    window: true
  }
}
