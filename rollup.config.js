import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-node-resolve'
import autoExternal from 'rollup-plugin-auto-external'

import pkg from './package.json'

const plugins = [
  autoExternal(),
  babel({ exclude: '**/node_modules/**' }),
  resolve({ extensions: ['.js', '.jsx'] }),
  commonjs(),
  filesize()
]

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' }
  ],
  plugins
}
