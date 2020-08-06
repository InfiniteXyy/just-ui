import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import sass from 'sass';
import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';
import ignoreImport from 'rollup-plugin-ignore-import';
import path from 'path';

import pkg from './package.json';

/** @type {import('rollup').RollupOptions[]} */
const options = [
  {
    input: 'components/index.tsx',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      resolve({ resolveOnly: ['classnames'] }),
      commonjs(),
      esbuild(),
      postcss({
        extract: path.resolve('dist/bundle.css'),
        extensions: ['css', 'scss'],
        process: sass,
      }),
    ],
  },
  {
    input: 'components/index.tsx',
    output: { file: pkg.types, format: 'es' },
    plugins: [ignoreImport({ extensions: ['.scss', '.css'] }), dts()],
  },
];

export default options;
