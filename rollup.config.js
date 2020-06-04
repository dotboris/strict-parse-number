import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import packageManifest from './package.json'

export default {
  input: 'src/index.js',

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
    babel({
      exclude: ['node_modules/**'],
      babelHelpers: 'bundled'
    })
  ]
}
