const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: { path: path.join(__dirname, '/dist'), filename: 'bundle.js' },
  module: {
    rules: [
      { test: /\.(js|jsx|ts|tsx)$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })]
};