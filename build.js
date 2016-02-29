var path = require('path');
var webpack = require('webpack');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = require("./webpack.config");

var compiler = webpack(config);
compiler.run(function(err, stats) {
  console.log(stats.toJson()); // по завершению, выводим всю статистику
});
