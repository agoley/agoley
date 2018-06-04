// @ts-nocheck
var gulp = require('gulp');
const webpack = require('webpack-stream');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var del = require('del');
var runSequence = require('run-sequence');
var babel = require('gulp-babel');


gulp.task('clean:minjs', function() {
  return del.sync('./js');
})

gulp.task('clean:css', function() {
  return del.sync('./css');
})

gulp.task('clean:index', function() {
  return del.sync('./index.html');
})

gulp.task('clean:assets', function() {
  return del.sync('./assets');
})

gulp.task('clean:js', function() {
  return del.sync('app/js');
});

gulp.task('compile-es6', ['clean:minjs', 'clean:js', 'clean:index', 'clean:assets'], function() {
  return gulp
    .src('app/es6/**/*.js')
    .pipe(
      babel({
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-class-properties']
      })
    )
    .pipe(gulp.dest('app/js'));
});

gulp.task('webpack', ['compile-es6'], function() {
  return gulp
    .src('app/js/*.js')
    .pipe(webpack({ output: { filename: 'main.js' } }))
    .pipe(gulp.dest('app/js'));
});

gulp.task('useref', ['webpack'], function() {
  return gulp
    .src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .on('error', function(err) {
      gutil.log(gutil.colors.red('[Error]'), err.toString());
    })
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('./'))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

gulp.task('sass', function() {
  return gulp
    .src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*').pipe(gulp.dest('assets/fonts'));
});

gulp.task('images', function() {
  return gulp.src('app/images/**/*').pipe(gulp.dest('assets/images'));
});


gulp.task('build', [
  'clean:css',
  'clean:js',
  'clean:minjs',
  'clean:assets',
  'clean:index',
  'compile-es6',
  'webpack',
  'useref',
  'sass',
  'fonts',
  'images'
]);

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/es6/**/*.js', ['build'], browserSync.reload);
});

gulp.task('browserSync', ['build'], function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });
});

gulp.task('default', function(callback) {
  runSequence(['browserSync', 'watch'], callback);
});
