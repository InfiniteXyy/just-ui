import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import sass from 'sass';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import ignoreImport from 'rollup-plugin-ignore-import';
import path from 'path';

import pkg from './package.json';

/** @type {import('rollup').RollupOptions[]} */
const options = [
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      typescript(),
      resolve({ resolveOnly: ['classnames'] }),
      commonjs(),
      postcss({
        extract: path.resolve('dist/bundle.css'),
        extensions: ['css', 'scss'],
        process: sass,
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: { file: pkg.types, format: 'es' },
    plugins: [ignoreImport({ extensions: ['.scss', '.css'] }), dts()],
  },
];

export default options;
