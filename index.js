module.exports = {
	printWidth: 120, // prettier recommends 80 (old Unix-Style)
	tabWidth: 8,
	useTabs: true,
	semi: false, // default
	singleQuote: true,
	quoteProps: 'as-needed', // default
	trailingComma: 'es5', // default since 2.0.0
	bracketSpacing: true, // default
	arrowParens: 'always', // default since 2.0.0
	endOfLine: 'lf', // default since 2.0.0,
	overrides: [
		{
			files: ['*.md'],
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
		{
			files: ['*.yml', '*.yaml'],
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
	],
}
