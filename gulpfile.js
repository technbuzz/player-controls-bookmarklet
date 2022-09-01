const {dest, src, series} = require('gulp')
const bookmarkify = require('gulp-bookmarkify');
const inject = require('gulp-inject');

function defaultTask(cb) {
  src('src/bookmark.js')
  .pipe(bookmarkify())
  .pipe(dest('dist'))
  cb();
}

// function injectAnchorScript(cb) {
//   src('src/index.html')
//   .pipe( 
//
//
// }

exports.default = series(defaultTask)
