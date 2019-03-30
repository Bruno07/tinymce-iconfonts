const { src, dest, parallel } = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const terser = require('gulp-terser');

function standard() {
  return src('./src/plugin.js', { sourcemaps: true })
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(dest('./dist', { sourcemaps: true }))
}

function minified() {
  return src('./src/plugin.js', { sourcemaps: true })
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(terser())
    .pipe(rename('plugin.min.js'))
    .pipe(dest('./dist', { sourcemaps: true }))
}

exports.default = parallel(standard, minified);
