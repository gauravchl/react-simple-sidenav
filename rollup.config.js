import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import bundleSize from 'rollup-plugin-bundle-size';
import replace from 'rollup-plugin-replace';
import react from 'react';
import reactDom from 'react-dom';

const isProduction = process.env.NODE_ENV === 'production';

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/bundle.js',
        format: 'cjs',
        plugins: [isProduction && terser()],
      },
    ],
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**', // only transpile our source code
      }),
      commonjs(), // convert cjs into ES(especially added for react)
      bundleSize(),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'demo/src/index.js',
    output: [
      {
        file: 'demo/index.js',
        format: 'cjs',
        plugins: [isProduction && terser()],
      },
    ],
    plugins: [
      resolve(),
      replace({
        'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
      }),
      babel({
        exclude: 'node_modules/**', // only transpile our source code
      }),
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          react: Object.keys(react),
          'react-dom': Object.keys(reactDom),
        },
      }),

      bundleSize(),
    ],
  },
];
