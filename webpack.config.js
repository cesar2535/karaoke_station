var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.styl']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [ 'react-hot', 'babel' ],
      exclude: [ /node_modules/ ],
      include: __dirname
    }, {
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap!cssnext!stylus?sourceMap')
    }, {
      test: /\.(png|jpg|svg|ttf|woff|eot)$/,
      loader: 'url?limit=1000000'
    }]
  }
};
