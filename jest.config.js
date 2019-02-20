module.exports = {
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  testMatch: ['<rootDir>/src/**/*.test.js?(x)'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es/.*)']
}
