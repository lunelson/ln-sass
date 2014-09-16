//////////////////
// definitions //
//////////////////

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

//////////////////////////////////////
// sass + autoprefixer + sourcemaps //
//////////////////////////////////////

gulp.task('sass', function () {
    gulp.src('test/test.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: false,
            onError: function(err) { console.log(err); }
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('test'));
});

///////////
// watch //
///////////

gulp.task('watch', function () {
    gulp.watch('**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
