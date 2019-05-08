/* eslint-env node */

const external = ['rxjs', 'rxjs/operators']

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'build/bundle-esm.js',
        format: 'esm',
        sourcemap: 'inline',
      },
      {
        file: 'build/bundle-cjs.js',
        format: 'cjs',
        sourcemap: 'inline',
      },
    ],
    external,
  },
  {
    input: 'src/functions.js',
    output: [
      {
        file: 'functions.js',
        format: 'esm',
        sourcemap: 'inline',
      },
      {
        file: 'functions-cjs.js',
        format: 'cjs',
        sourcemap: 'inline',
      },
    ],
    external,
  },
]
