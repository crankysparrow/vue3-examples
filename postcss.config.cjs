const postcssPresetEnv = require('postcss-preset-env')

module.exports = () => ({
	map: true,
	plugins: [
		postcssPresetEnv({
			features: {
				'nesting-rules': { unresolved: 'warn' },
				'custom-selectors': true,
			},
		}),
	],
})
