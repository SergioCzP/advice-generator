const { src, series, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cssnano = require("gulp-cssnano");
const sourcemaps = require("gulp-sourcemaps");

function buildCss(done) {
  src("scss/app.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cssnano())
    .pipe(sourcemaps.write("."))
    .pipe(dest("build/css"));
  done();
}

function devScss() {
  watch("scss/**/*.scss", buildCss);
}

exports.default = series(buildCss, devScss);
exports.devScss = devScss;
exports.buildCss = buildCss;
