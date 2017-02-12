var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload');

gulp.task('default', ['scss', 'watch']);

gulp.task('scss', function() {
    gulp.src(['app/assets/*.scss', '!app/assets/*.min.*'])
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('app/assets/'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('app/assets/**/*.scss', ['scss']);
});
