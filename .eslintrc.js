module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				printWidth: 80,
				trailingComma: 'es5',
				semi: false,
				jsxSingleQuote: true,
				singleQuote: true,
				useTabs: true,
			},
		],
	},
	settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
			},
		},
	},
}
