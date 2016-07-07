'use strict';

var gulp    = require('gulp');
var mocha   = require('gulp-mocha');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");

gulp.task('mocha', function() {
  gulp.src('test/test.js', {read: false})
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(mocha({reporter: 'spec'}));
});

gulp.task('test', function() { gulp.watch(['{scss,test}/**/*.scss'], ['mocha']); });

