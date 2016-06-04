var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = {
  entry: {
    core: './styles/main.css',
    app: './styles/some-app.css'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?sourceMap&modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]!'
        )
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('core', 'core_[chunkhash].js'),
    new ExtractTextPlugin('[name]_[chunkhash].css')
  ],

  output: {
    filename: "[name].js",
    path: "dist"
  }
};

module.exports = webpackConfig;
