const {dest, src, series} = require('gulp')
const bookmarkify = require('gulp-bookmarkify');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

function defaultTask(cb) {
  src('src/bookmark.js')
  .pipe(bookmarkify())
  .pipe(rename({ suffix: '.min'}))
  .pipe(dest('dist'))
  cb();
}

function bundle(cb) {
  src('src/*.js')
  .pipe(concat('bundle.min.js'))
  .pipe(uglify())
  // .pipe(rename({ suffix: '.min'}))
  .pipe(dest('docs')) 

  cb();
}

exports.default = series(defaultTask, bundle)
