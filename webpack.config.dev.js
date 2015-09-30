var path = require('path');
var webpack = require('webpack');
var poststylus = require('poststylus');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'src')
    }, {
      test: /\.styl$/,
      loaders: ['style', 'css', 'stylus'],
      exclude: /node_modules/
    }]
  },
  stylus: {
    use: [ poststylus(['postcss-import']) ]
  }
};
