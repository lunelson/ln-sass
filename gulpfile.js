'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function () {
    return gulp.src('src/**/*.css')
});

gulp.task('sass', function () {
  gulp.src(['./test/**/*.scss', '!./test/_holding/**/*.scss'], {base: './test'})
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./test'));
});

gulp.task('watch', function () { gulp.watch(['./**/*.scss'], ['sass']); });
gulp.task('default', ['sass', 'watch']);
