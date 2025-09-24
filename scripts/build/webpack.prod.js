const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  mode: 'production',
  
  output: {
    filename: '[name].[contenthash].js',
  },
  
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});