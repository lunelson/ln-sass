'use strict';

var gulp    = require('gulp');
var mocha   = require('gulp-mocha');
var plumber = require('gulp-plumber');

gulp.task('mocha', function() {
  gulp.src('test/test.js', {read: false})
    .pipe(plumber())
    .pipe(mocha({reporter: 'spec'}));
});

gulp.task('test', function() { gulp.watch(['{scss,test}/**/*.scss'], ['mocha']); });

