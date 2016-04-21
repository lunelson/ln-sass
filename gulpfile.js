'use strict';

var gulp  = require('gulp');
var mocha = require('gulp-mocha');
gulp.task('mocha', function() { gulp.src('test/test_sass.js', {read: false}).pipe(mocha({reporter: 'spec'})); });
gulp.task('test', function() { gulp.watch(['scss/**/*.scss'], ['mocha']); });

