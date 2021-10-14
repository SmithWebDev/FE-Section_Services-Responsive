const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

//compile sass to css
function style() {
  // find sass file
  return gulp.src('./sass/**/*.sass')
  // pass sass through compiler
    .pipe(sass())
  // save compiled css file
    .pipe(gulp.dest('./css'))
  // stream changes to browsers
    .pipe(browserSync.stream());
}

//create watch file
function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./sass/**/*.sass', style)
  gulp.watch('./*.html').on('change', browserSync.reload)
  gulp.watch('./js/**/*.js').on('change', browserSync.reload)
};

exports.style = style;
exports.watch = watch;
