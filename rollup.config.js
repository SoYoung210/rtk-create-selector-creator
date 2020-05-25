import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

const input = './src/index.ts';
const outputDir = 'lib';
const extensions = ['.js', '.jsx', '.ts'];

export default {
  input,
  output: [
    {
      dir: outputDir,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    commonjs(),
    resolve({
      preferBuiltins: false,
      extensions,
    }),
    typescript({
      typescript: require('ttypescript'),
      clean: true,
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions,
    }),
  ],
  preserveModules: true,
};
