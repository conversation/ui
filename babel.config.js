module.exports = api => {
  const env = api.cache(() => process.env.NODE_ENV)
  const moduleProcessing = env === 'test' ? 'commonjs' : false

  const presets = [
    [
      '@babel/preset-env',
      {
        'modules': moduleProcessing
      }
    ],
    '@babel/preset-react'
  ]
  const plugins = ['@babel/plugin-proposal-class-properties']

  return { plugins, presets }
}
