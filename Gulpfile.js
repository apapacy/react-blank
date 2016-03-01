var gulp = require('gulp');
// Пишет скомпонованные файлы в диреторию
var webpack = require('gulp-webpack');
// Перенаправляет скомпонованные файлы в поток (с теми же урлами)
//var webpack = require('webpack-stream');
var config = {
  dependencies: {
    bootstrap: {
      path: './bower_components/bootstrap/dist',
      paths: ['./bower_components/bootstrap/dist'],
      extensions: ['eot', 'svg', 'tff', 'ttf', 'woff', 'woff2', 'css', 'js']
    },
    foundation: {
      path: './bower_components/foundation',
      paths: ['./bower_components/foundation'],
      extensions: ['eot', 'svg', 'tff', 'ttf', 'woff', 'woff2', 'css', 'js']
    }
  },

  DEST_PATH: './public/assets'
};


gulp.task('default', [/*'serve',*/ 'bootstrap', 'foundation'], function() {
  return gulp.src('src/index.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('public/assets'), {
      output: "bundle.js"
    });
});


//var browserSync = require('browser-sync').create();
//var reload = browserSync.reload;
//gulp.task('serve', function() {

  // Serve files from the root of this project
//  browserSync.init(
//    './public/assets/**.*', {
//      server: {
//        baseDir: "./public"
//      }
//    });
//
//  gulp.watch("*.*").on("change", reload);
//});


gulp.task('bootstrap', function() {
  var conf = config.dependencies.bootstrap;
  return gulp.src(conf.path + '/**/*', {
      base: conf.path
    })
    .pipe(gulp.dest(config.DEST_PATH + '/bootstrap'))
    .pipe(gulp.dest('src/bootstrap'))
});

gulp.task('foundation', function() {
  var conf = config.dependencies.foundation;
  return gulp.src(conf.path + '/**/*', {
      base: conf.path
    })
    .pipe(gulp.dest(config.DEST_PATH + '/foundation'))
    .pipe(gulp.dest('src/foundation'))
});
