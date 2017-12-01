const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const stylelint = require('stylelint');

gulp.task('clean:dist', function() {
  const del = require('del');


  return del('dist');
});

gulp.task('build:css',['clean:dist'], function(){
  const autoprefixer = require('gulp-autoprefixer');
  const sass = require('gulp-sass');


  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    // .pipe(cssnano())
    .pipe(autoprefixer({
      browsers: [/*'last 2 versions'*/ '> 0.5%'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/css'));
});


gulp.task('build:html', ['build:css'], function(){
  const htmlmin = require('gulp-htmlmin');


  return gulp.src('*.html')
    .pipe(htmlmin())
    .pipe(gulp.dest('dist'));
});

// ----- CORRECTION ----- //

gulp.task('build', ['build:css', 'build:html']);