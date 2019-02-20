module.exports = api => {
  const env = api.cache(() => process.env.NODE_ENV)
  const modules = env === 'test' ? 'commonjs' : false
  const ignore = env === 'test' ? [] : [/test\.jsx?$/]
  const presets = [
    [
      '@babel/preset-env',
      { modules }
    ],
    '@babel/preset-react'
  ]
  const plugins = ['@babel/plugin-proposal-class-properties']

  return { ignore, plugins, presets }
}
