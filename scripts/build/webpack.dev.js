const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  
  devServer: {
    static: './dist',
    open: true,
    hot: false,
    liveReload: false,
  },
});