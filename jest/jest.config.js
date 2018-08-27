module.exports = {
	rootDir: '../',
	setupTestFrameworkScriptFile: '<rootDir>/jest/jest.setup',
	moduleDirectories: ['client/src', 'node_modules'],
	transform: {
		'jest/.*\.js': '<rootDir>/jest/jest.transform',
		'client/src/.*\.js$': '<rootDir>/jest/jest.transform',
	}
}
