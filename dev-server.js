var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = require("./webpack.config");

config.entry.browser = "webpack-dev-server/client?http://localhost:8080/";
var compiler = webpack(config);
//var server = new WebpackDevServer(compiler, {});
//sconfig.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");erver.listen(8080);


//config.entry.app.unshift("webpack-dev-server/client?http://localhost:3010/");
var devServer = new WebpackDevServer(
	webpack(config),
	{
		contentBase: __dirname+ "/public",
		publicPath: '/assets'
	}
).listen(3010, 'localhost');
