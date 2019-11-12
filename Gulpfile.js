const gulp = require('gulp')
const del = require('del')

const PUBLIC_DIR = 'public'
const HTML_SRC = 'src/index.html'
const JS_SRC = 'src/**/*.js'

function clean() {
    return del(['public/*'])
}

function htmlCopy() {
    return gulp.src(HTML_SRC).pipe(gulp.dest('public'))
}

function js() {
    return gulp.src(JS_SRC).pipe(gulp.dest('public/scripts'))
}

function defaultTask(cb) {
    return gulp.series(
        clean,
        gulp.parallel(htmlCopy, js)
    )(function() {
        gulp.watch(HTML_SRC, htmlCopy)
        gulp.watch(JS_SRC, js)
    })
}

exports.default = defaultTask
