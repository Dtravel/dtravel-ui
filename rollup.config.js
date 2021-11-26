import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import cleaner from 'rollup-plugin-cleaner'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import packageJson from './package.json'
// import postcss from 'rollup-plugin-postcss'
import postcss from 'rollup-plugin-postcss-modules'
import autoprefixer from 'autoprefixer'
import scss from 'rollup-plugin-scss'
// import path from 'path'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    cleaner({
      targets: ['./dist'],
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    babel({ exclude: 'node_modules/**' }),
    typescript({
      typescript: require('typescript'),
      exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
    }),
    // postcss({
    //   plugins: [autoprefixer()],
    //   sourceMap: true,
    //   extract: true,
    //   minimize: true,
    //   modules: true,
    //   use: ['sass'],
    //   writeDefinitions: true,
    //   extensions: ['.css', '.scss'],
    // }),
    postcss({
      plugins: [autoprefixer()],
      extract: true,
      modules: true,
      use: ['sass'],
    }),
    scss(),
  ],
}
