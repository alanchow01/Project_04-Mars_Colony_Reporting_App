'use strict';

var gulp = require('gulp');
var conf = require('./conf');
var jscs = require('gulp-jscs');

gulp.task('jscs', function () {
    return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
        .pipe(jscs('.jscsrc'));
});