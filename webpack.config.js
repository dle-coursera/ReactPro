'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './source/App.jsx'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      },
      include: [
        path.join(__dirname, '/source')
      ]
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
