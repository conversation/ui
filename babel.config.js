module.exports = api => {
  const env = api.cache(() => process.env.NODE_ENV)
  const ignore = env === 'test' ? [] : [/test\.jsx?$/]
  const presets = ['@babel/preset-env', '@babel/preset-react']
  const plugins = ['@babel/plugin-proposal-class-properties']

  return { ignore, plugins, presets }
}
