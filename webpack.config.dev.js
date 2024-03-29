var path = require('path');
var webpack = require('webpack');
var poststylus = require('poststylus');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Ocean KTV',
      filename: 'index.html',
      template: 'index.template.html',
      favicon: path.join(__dirname, 'app', 'assets', 'images', 'favicon.ico')
    })
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'app')
    }, {
      test: /\.styl$/,
      loaders: ['style', 'css?sourceMap', 'stylus?sourceMap'],
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg|svg|gif|ttf|woff|eot)$/,
      loaders: ['url?limit=1000000'],
      exclude: /node_modules/
    }]
  },
  stylus: {
    use: [ poststylus(['postcss-import', 'rucksack-css', 'autoprefixer']) ]
  }
};
