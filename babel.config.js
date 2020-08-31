module.exports = api => {
  const nodeEnv = api.cache(() => process.env.NODE_ENV)
  const ignore = nodeEnv === 'test' ? [] : [/test\.jsx?$/]
  const presets = ['@babel/preset-env', '@babel/preset-react']
  const plugins = ['@babel/plugin-proposal-class-properties']
  const env = {
    esm: {
      presets: [
        ['@babel/preset-env', { modules: false }], '@babel/preset-react'
      ]
    }
  }

  return { ignore, plugins, presets, env }
}
