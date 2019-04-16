module.exports = {
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  testMatch: ['<rootDir>/src/**/*.test.js?(x)'],
  moduleNameMapper: {
    '\\.(jpg|png|gif|svg)$': '<rootDir>/test/blank.png'
  }
}
