# standard-loader

webpack loader for linting your code with [feross/standard](https://github.com/feross/standard)

## Usage

```js
const webpack = require('webpack');

const config = {
  ...
  module: {
    preLoaders: [
      {
        // set up semistandard-loader as a preloader
        test: /\.jsx?$/,
        loader: 'semistandard',
        exclude: /(node_modules|bower_components)/
      }
    ],
    loaders: [
      ...
    ]
  },
  standard: {
    // config options passed to standard e.g.
    parser: 'babel-eslint'
  }
};

module.exports = config;
```

### Example Input

```js
//code not conforming to semistandard style

module.exports = function(a,b) {
    console.log( a, b)
};



```

### Example Output
```
$ webpack
Hash: 9fb962b90e5ec33f741d
Version: webpack 1.12.2
Time: 1076ms
   Asset     Size  Chunks             Chunk Names
build.js  2.03 kB       0  [emitted]  bundle
    + 1 hidden modules

WARNING in ./index.js
<text>:1:1: Expected space or tab after // in comment.
<text>:3:26: Missing space before function parentheses.
<text>:3:28: A space is required after ','.
<text>:4:5: Expected indentation of 2 space characters but found 4.
<text>:4:16: There should be no spaces inside this paren.
<text>:4:23: Missing semicolon.
<text>:7:1: Multiple blank lines not allowed.
```

## Licence

MIT
