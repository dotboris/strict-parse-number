import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import packageManifest from './package.json'

const INPUT = 'src/index.js'

const BABEL_CONFIG = {
  exclude: ['node_modules/**'],
  babelHelpers: 'bundled'
}

export default {
  input: INPUT,

  output: [
    // CommonJS for node
    {
      file: packageManifest.main,
      format: 'cjs',
      sourcemap: true
    },
    // ES Module for bundlers
    {
      file: packageManifest.module,
      format: 'es',
      sourcemap: true
    },
    // UMD for browsers with a <script> tag
    {
      name: 'StrictParseNumber',
      file: packageManifest.browser,
      format: 'umd',

      sourcemap: true,

      plugins: [
        terser()
      ]
    }
  ],

  plugins: [
    babel(BABEL_CONFIG)
  ]
}
