var gulp   = require('gulp');
var concat = require('gulp-concat');

gulp.task('mathsass',[], function() {
    gulp.src([
        'stylesheets/mathsass/dist/_constants.scss',
        'stylesheets/mathsass/dist/functions/_pow.scss',
        'stylesheets/mathsass/dist/functions/_fact.scss',
        'stylesheets/mathsass/dist/functions/_sqrt.scss',
        'stylesheets/mathsass/dist/functions/_exp.scss',
        'stylesheets/mathsass/dist/functions/_frexp.scss',
        'stylesheets/mathsass/dist/functions/_ldexp.scss',
        'stylesheets/mathsass/dist/functions/_log.scss',
        'stylesheets/mathsass/dist/functions/_sin.scss',
        'stylesheets/mathsass/dist/functions/_cos.scss',
        'stylesheets/mathsass/dist/functions/_tan.scss',
        'stylesheets/mathsass/dist/functions/_csc.scss',
        'stylesheets/mathsass/dist/functions/_sec.scss',
        'stylesheets/mathsass/dist/functions/_cot.scss',
        'stylesheets/mathsass/dist/functions/_asin.scss',
        'stylesheets/mathsass/dist/functions/_acos.scss',
        'stylesheets/mathsass/dist/functions/_atan.scss',
        'stylesheets/mathsass/dist/functions/_atan2.scss',
        'stylesheets/mathsass/dist/helpers/_strip-unit.scss',
        'stylesheets/mathsass/dist/helpers/_deg-to-rad.scss',
        'stylesheets/mathsass/dist/helpers/_rad-to-deg.scss',
        'stylesheets/mathsass/dist/helpers/_unitless-rad.scss'
        ])
.pipe(concat('_mathsass-pkgd.scss'))
.pipe(gulp.dest('stylesheets/mathsass/_pkg/'));
});

gulp.task('sass-util',[], function() {
    gulp.src(['stylesheets/sass-util/stylesheets/*.scss'])
    .pipe(concat('_sass-util-pkgd.scss'))
    .pipe(gulp.dest('stylesheets/sass-util/_pkg/'));
});

gulp.task('sass-maps-plus',[], function() {
    gulp.src([
        'stylesheets/sass-maps-plus/stylesheets/_header.scss',
        'stylesheets/sass-maps-plus/stylesheets/_utils.scss',
        'stylesheets/sass-maps-plus/stylesheets/_maps.scss',
        'stylesheets/sass-maps-plus/stylesheets/_multi-maps.scss',
        'stylesheets/sass-maps-plus/stylesheets/_list-maps.scss',
        'stylesheets/sass-maps-plus/stylesheets/_aliases.scss'
        ])
    .pipe(concat('_sass-maps-plus-pkgd.scss'))
    .pipe(gulp.dest('stylesheets/sass-maps-plus/_pkg/'));
});

gulp.task('sass-ln',[], function() {
    gulp.src([
        'stylesheets/_reset.scss',
        'stylesheets/_media.scss',
        'stylesheets/_media-utils.scss',
        'stylesheets/_media-units.scss',
        'stylesheets/_layout.scss',
        'stylesheets/_layout-util.scss',
        'stylesheets/_typo.scss'
        ])
    .pipe(concat('_sass-ln-pkgd.scss'))
    .pipe(gulp.dest('_pkg/'));
});

gulp.task('sass-master',[], function() {
    gulp.src([
        'stylesheets/mathsass/_pkg/_mathsass-pkgd.scss',
        'stylesheets/sass-util/_pkg/_sass-util-pkgd.scss',
        'stylesheets/sass-maps-plus/_pkg/_sass-maps-plus-pkgd.scss',
        '_pkg/_sass-ln-pkgd.scss'
        ])
    .pipe(concat('_sass-master.scss'))
    .pipe(gulp.dest('_pkg/'));
});

gulp.task('sass-master-compass',[], function() {
    gulp.src([
        'stylesheets/sass-util/_pkg/_sass-util-pkgd.scss',
        'stylesheets/sass-maps-plus/_pkg/_sass-maps-plus-pkgd.scss',
        '_pkg/_sass-ln-pkgd.scss'
        ])
    .pipe(concat('_sass-master-compass.scss'))
    .pipe(gulp.dest('_pkg/'));
});


///////////
// watch //
///////////

gulp.task('watch', function () {
  // gulp.watch('sass-maps-plus/stylesheets/*.scss', ['sass-maps-plus']);
  // gulp.watch('sass-ln/stylesheets/*.scss', ['sass-ln']);
  gulp.watch(['stylesheets/**/*.scss', '!**/_pkg/**/*'], [
    'mathsass',
    'sass-util',
    'sass-maps-plus',
    'sass-ln',
    'sass-master',
    'sass-master-compass',
    'watch'
    ]);
});

gulp.task('default', [
    'mathsass',
    'sass-util',
    'sass-maps-plus',
    'sass-ln',
    'sass-master',
    'sass-master-compass',
    'watch'
    ]);
