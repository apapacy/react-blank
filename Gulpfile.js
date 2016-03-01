var gulp = require('gulp');
var webpack = require('gulp-webpack');
gulp.task('default', ['serve'], function() {
  return gulp.src('src/index.js')
  .pipe(webpack( require('./webpack.config.js')))
  .pipe(gulp.dest('public/assets'), {output:"bundle.js"} );
});


var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init(
      './public/assets/**.*',
      {
        server: {
            baseDir: "./public"
        }
    });

    gulp.watch("*.*").on("change", reload);
});
