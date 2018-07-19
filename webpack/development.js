const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfigs = require('./base');

module.exports = merge({}, baseConfigs, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      }
    ]
  },
  devServer: {
    inline: true,
    hot: true,
    port: 1212
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'dev',
      port: 1212
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});