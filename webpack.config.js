"use strict";

var path = require('path');
var webpack = require('webpack');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  watch: true,
  context: path.join(__dirname, 'src'), // исходная директория
  entry: {
    app: './index', // файл для сборки, если несколько - указываем hash (entry name => filename)
    //bowser: "webpack-dev-server/client?http://localhost:3010/"
  },
  output: {
    path: path.join(__dirname, 'public/assets'), // выходная директория
    filename: "bundle.js"
  },
  plugins: [
    //new webpack.ProvidePlugin({
    //  bootstrap: "bootstrap.css",
    //  modulesDirectories: ['bower_components/bootstrap/dist/css'],
    //}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify('production')
    }),
    new BowerWebpackPlugin({
      modulesDirectories: ['bower_components'],
      manifestFiles: ['bower.json', '.bower.json'],
      includes: /.*/,
      //excludes: /.*\.less$/
    }),
    new ExtractTextPlugin('styles.css')
  ],
  resolve: [{
    extensions: ['', '.js', '.jsx'],
    output: "bundle.js"
},
//{ extensions: ['.css'],
//  output: "vendor.css",
//  modulesDirectories: ['bower_components/bootstrap/dist/css'],
//}
],
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }, {
      test: /\.jsx$/,
      //loader: 'jsx-loader'
      loader: 'babel',
      //include: path.join(__dirname, 'src'),
      //query: {
      //  presets: ['es2015', 'react']
      //}

    }],
  }
  /*,
    plugins: [
    ]*/
};
