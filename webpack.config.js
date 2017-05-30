const path = require('path');
module.exports = {
  name: 'SSR',
  entry: './app/client.js',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, '.', 'app'),
        exclude: path.join(__dirname, '.', 'node_modules'),
      },
    ]
  }
};
