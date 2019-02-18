module.exports = {
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!lodash-es/.*)'
  ]
}
