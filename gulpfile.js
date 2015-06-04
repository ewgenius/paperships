var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var clean = require('gulp-clean');

var path_dist = './dist';

gulp.task('clean-html', function() {
  gulp.src([path_dist + '/app/*.html', path_dist + '/app/**/*.html'])
    .pipe(clean());
});

gulp.task('clean-js', function() {
  gulp.src([path_dist + '/app/*.js', path_dist + '/app/**/*.js'])
    .pipe(clean());
});

gulp.task('clean-css', function() {
  gulp.src([path_dist + '/app/*.css', path_dist + '/app/**/*.css'])
    .pipe(clean());
});

gulp.task('jade', ['clean-html'], function() {
  gulp.src(['./src/*.jade', './src/**/*.jade'])
    .pipe(jade())
    .pipe(gulp.dest(path_dist + '/app'));
});

gulp.task('scss', ['clean-css'], function() {
  gulp.src(['./src/*.scss', './src/**/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest(path_dist + '/app'));
});

gulp.task('js', ['clean-js'], function() {
  gulp.src(['./src/*.js', './src/**/*.js'])
    .pipe(gulp.dest(path_dist + '/app'));
});

gulp.task('bower-components', function() {
  gulp.src(['./bower_components/**/*', './bower_components/*'])
    .pipe(gulp.dest(path_dist + '/bower_components'));
});

gulp.task('watch', ['jade', 'scss', 'js', 'bower-components'], function() {
  gulp.watch(['./src/*.jade', './src/**/*.jade'], ['jade']);
  gulp.watch(['./src/*.scss', './src/**/*.scss'], ['scss']);
  gulp.watch(['./src/*.js', './src/**/*.js'], ['js']);
  gulp.watch(['./bower_components/**/*', './bower_components/*'], ['bower-components']);
});
