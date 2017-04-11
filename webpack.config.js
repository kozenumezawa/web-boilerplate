const path = require('path');

module.exports = {
  entry: {
    bundle: './front/src/main.js'
  },
  output: {
    path: path.join(__dirname, 'front/dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.js[x]?$/,
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        }
      }
    ]
  }
};
