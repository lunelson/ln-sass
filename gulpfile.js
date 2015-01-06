var buffer         = require('vinyl-buffer');
var gulp           = require('gulp');
var gutil          = require('gulp-util');
var plumber        = require('gulp-plumber');
var rename         = require("gulp-rename");
var run            = require('gulp-run');

gulp.task('sass', function () {
  gulp.src('test/test.scss', { buffer: false })
    .pipe(plumber(function(err) {
        gutil.beep();
        var errorTxt = err.message +'\n\n'+ err.source;
        gutil.log(gutil.colors.red(errorTxt));
    }))
    .pipe(run('/applications/libsass/sassc/bin/sassc -s', {verbosity: 1}))
    .pipe(rename(function (path) { path.extname = ".css"; }))
    .pipe(buffer())
    .pipe(gulp.dest('test/'));
});

///////////
// watch //
///////////

gulp.task('watch', function () {
    gulp.watch('**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);
