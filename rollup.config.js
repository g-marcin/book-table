import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';

import json from '@rollup/plugin-json';
import html from '@rollup/plugin-html';
import resolve from '@rollup/plugin-node-resolve';

import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';



export default {
  input: 'src/main.tsx', 
  output: {
    file: 'dist-rollup/bundle.js',
    format: 'iife',
    inlineDynamicImports: true,
    globals: {
      util: 'util',
      stream: 'stream',
      path: 'path',
      http: 'http',
      https: 'https',
      url: 'url',
      fs: 'fs',
      assert: 'assert',
      tty: 'tty',
      os: 'os',
      zlib: 'zlib',
      events: 'events',
    },
  },
  plugins: [
    html({
      title: 'rollup-bundle-html',
    }),
    commonjs(),
    typescript(),
    postcss({
      modules: true,
      extract: false,

    }),
    json(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/react', '@babel/typescript'],
      babelHelpers: 'bundled',
    }),
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    terser(),
  ]
  
};