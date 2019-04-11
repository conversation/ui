module.exports = {
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  testMatch: ['<rootDir>/src/**/*.test.js?(x)'],
  moduleNameMapper: {
    '\\.(jpg|png)$': '<rootDir>/test/dummy.png'
  }
}
