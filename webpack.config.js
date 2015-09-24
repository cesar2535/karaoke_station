var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var NODE_ENV = (process.env.NODE_ENV || 'development').toLowerCase();
var cssLoaders = 'style!css?sourceMap!cssnext!stylus?sourceMap';
var entry = [
  'webpack-dev-server/client?http://0.0.0.0:3000',
  'webpack/hot/only-dev-server',
  './app/index'
];

var sourceMap = 'source-map';

if (NODE_ENV === 'production') {
  cssLoaders = ExtractTextPlugin.extract('style', 'css?sourceMap!cssnext!stylus?sourceMap');
  entry = [ './app/index' ];
  sourceMap = '';
}

module.exports = {
  devtool: sourceMap,
  entry: entry,
  output: {
    path: path.join(__dirname, 'static'),
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
      loader: cssLoaders
    }, {
      test: /\.(png|jpg|svg|ttf|woff|eot)$/,
      loader: 'url?limit=1000000'
    }]
  }
};
