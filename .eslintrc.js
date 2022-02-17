module.exports = {
  env: {
    browser: true,
    es6: true,
    es2021: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    camelcase: 0,
    'prettier/prettier': ['error'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-shadow': [
      'error',
      {
        allow: ['req', 'res', 'err'],
      },
    ],
    'valid-jsdoc': [
      'error',
      {
        requireReturn: true,
        requireReturnType: true,
        requireParamDescription: false,
        requireReturnDescription: true,
      },
    ],
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
        },
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
        extensions: ['.js', '.ts', '.d.ts'],
      },
    },
  },
};
