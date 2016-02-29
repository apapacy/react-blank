var path = require('path');
var webpack = require('webpack');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = {
  context: path.join(__dirname, 'src'), // исходная директория
  entry: './index', // файл для сборки, если несколько - указываем hash (entry name => filename)
  output: {
    path: path.join(__dirname, 'public/assets') // выходная директория
  },
  plugins: [
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
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.jsx$/,
      //loader: 'jsx-loader'
      loader: 'babel'
    }],
  }
  /*,
    plugins: [
    ]*/
};
var compiler = webpack(config);
compiler.run(function(err, stats) {
  console.log(stats.toJson()); // по завершению, выводим всю статистику
});
