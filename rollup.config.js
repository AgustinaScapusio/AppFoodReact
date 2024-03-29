import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/main.jsx',
  output: {
    file: 'dist/bundle.js', 
    format: 'cjs' 
  },
  plugins: [
    resolve(),
    babel({ 
      babelHelpers: 'bundled',
      exclude: 'node_modules/**' 
    })
  ]
};
