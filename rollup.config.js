import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss'
import {terser} from 'rollup-plugin-terser'
import replace from 'rollup-plugin-replace';
import copy from 'rollup-plugin-copy'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: "dist/index.js",
        format: 'cjs',
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: 'named',
      }
    ],
    plugins: [
      replace({
        // Replace import paths in JavaScript and CSS files
        'url("../../../../public/fonts': 'url("/public/fonts',
        'url("../../../../public/img': 'url("/public/img',
      }),
      copy({
        targets: [
          { src: 'public/fonts', dest: 'dist/public/fonts' },
          { src: 'public/img', dest: 'dist/public/img' },
          { src: 'src/components/Atoms/Icon/fontStyle.css', dest: 'dist/public' }
        ]
      }),
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: ['node_modules/**', 'rollup.config.js', '.storybook', 'public', 'src'],
        presets: ['@babel/preset-react']
      }),
      external(),
      resolve(),
      commonjs(),
      terser()
    ],
  }
];