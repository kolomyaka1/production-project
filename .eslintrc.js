module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:i18next/recommended'
    ],
    'overrides': [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off'
            }
        }
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'i18next'
    ],
    'settings': {
        'react': {
            'version': 'detect'
        }
    },
    'rules': {
        'react/jsx-indent': [2, 4, { indentLogicalExpressions: true }],
        indent: [2,4],
        'react/jsx-props-no-spreading': 'warn',
        'react/react-in-jsx-scope': 'off',
        'max-statements': [2, 15],
        'react/display-name': 'off',
        'object-curly-spacing': [2, 'always'],
        'no-undef': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'i18next/no-literal-string': [
            'error',
            { markupOnly: true, ignoreAttribute: ['to', 'data-testid'] }
        ],
        'max-len': ['error', { ignoreComments: true, code: 100 }],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],

    },
    globals: {
        '__IS_DEV__': true
    }
};
