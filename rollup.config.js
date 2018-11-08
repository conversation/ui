import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-node-resolve'

import pkg from './package.json'

const plugins = [
  babel({ exclude: '**/node_modules/**' }),
  resolve({ extensions: ['.js', '.jsx'] }),
  commonjs(),
  filesize()
]

export default {
  external: ['prop-types', 'react', 'react-dom'],
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' }
  ],
  plugins
}
