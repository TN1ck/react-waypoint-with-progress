const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'test/progress-test.jsx'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'progress-test.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
