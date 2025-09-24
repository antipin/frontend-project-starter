const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  
  output: {
    path: path.resolve(__dirname, '../../dist'),
    clean: true,
  },
  
  resolve: {
    extensions: ['.tsx', '.ts'],
  },
  
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};