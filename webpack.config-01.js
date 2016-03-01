"use strict";

var path = require('path');
var webpack = require('webpack');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  watch:true,
  context: path.join(__dirname, 'src'), // исходная директория
  entry: [
  //  'webpack/hot/dev-server',
  // 'webpack/hot/only-dev-server',
     './index', // файл для сборки, если несколько - указываем hash (entry name => filename)
    //bowser: "webpack-dev-server/client?http://localhost:3010/"
  ],
  output: {
    path: path.join(__dirname, 'public/assets'), // выходная директория
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify('production')
    }),
    new BowerWebpackPlugin({
      modulesDirectories: ['bower_components'],
      manifestFiles: ['bower.json', '.bower.json'],
      includes: /.*/,
      excludes: /.*\.less$/
    }),
    new ExtractTextPlugin('styles.css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    output: "bundle.js"
  },
  module: {
    preLoaders: [
       {
         //Eslint loader
         test: /\.(js|jsx)$/,
         loader: 'eslint-loader',
         include: [path.resolve(__dirname, "src")],
         exclude: [ path.resolve(__dirname, 'node_modules')]
       },
     ],
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.(js|jsx)$/,
      //loader: 'jsx-loader'
       loaders: ['react-hot', 'babel'],
      //include: path.join(__dirname, 'src'),
      //query: {
      //  presets: ['es2015', 'react']
      //}

    }],
  //eslint config options. Part of the eslint-loader package
  eslint: {
    configFile: '.eslintrc'
  },



  }
  /*,
    plugins: [
    ]*/
};
