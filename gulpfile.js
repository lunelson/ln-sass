'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src(['./test/**/*.scss', '!./test/_holding/**/*.scss'], {base: './test'})
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./test'));
});

gulp.task('watch', function () { gulp.watch(['./**/*.scss'], ['sass']); });
gulp.task('default', ['sass', 'watch']);
