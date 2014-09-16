//////////////////
// definitions //
//////////////////

var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var filter       = require('gulp-filter');

//////////////////////////////////////
// sass + autoprefixer + sourcemaps //
//////////////////////////////////////

gulp.task('sass', function () {
    gulp.src('test/test.scss')
        // .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: false,
            onError: function(err) {
                browserSync.notify(err, 2000);
                console.log(err); }
        }))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('test'))
        // .pipe(filter('*.css')) // necessary?
        .pipe(browserSync.reload({stream:true}));
});

/////////////////
// browsersync //
/////////////////

// task: browser-sync startup; runs sass--app and jekyll-build then starts server
gulp.task('browser-sync', ['sass'], function() {
    browserSync({
        server: {
            baseDir: 'test'
        }
    });
});


///////////
// watch //
///////////

gulp.task('watch', function () {
    gulp.watch('**/*.scss', ['sass']);
    gulp.watch(['test/*.html'], browserSync.reload);
});

gulp.task('watch-sass', function () {
    gulp.watch('**/*.scss', ['sass']);
});

// run 'browser-sync' at startup; implicitly run 'sass'
gulp.task('default', ['browser-sync', 'watch']);

// sass only version
gulp.task('sass-only', ['sass', 'watch-sass']);