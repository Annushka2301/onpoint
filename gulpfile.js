const { src, dest, series, watch } = require('gulp');

const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const autoprefixes = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const image = require('gulp-image');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps')
const browserSync = require('browser-sync').create();

const styles = () => {
    return src('src/styles/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(concat('style.css'))
        .pipe(autoprefixes({
            cascade: false,
        }))
        .pipe(cleanCSS ({
            level: 2
        }))
        .pipe(sourcemaps.write())
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
};

const htmlMinify = () => {
    return src('src/**/*.html')
        .pipe(htmlMin({
            collapseWhitespace: true,
        }))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
};

const scripts = () => {
    return src([
        'src/scripts/**/*.js',
    ])
        .pipe(sourcemaps.init())
        .pipe(uglify().on('error', notify.onError()))
        .pipe(sourcemaps.write())
        .pipe(dest('dist/scripts'))
        .pipe(browserSync.stream())
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
};

const fonts = () => {
    return src([
        'src/fonts/**/*.woff',
        'src/fonts/**/*.woff2',
    ])
    .pipe(dest('dist/fonts'))
    .pipe(browserSync.stream())
}

const images = () => {
    return src([
        'src/img/**/*.jpg',
        'src/img/**/*.png',
        'src/img/**/*.svg',
        'src/img/**/*.jpeg',
    ])
    .pipe(image())
    .pipe(dest('dist/img'))
    .pipe(browserSync.stream())
}

watch('src/**/*.html', htmlMinify)
watch('src/styles/**/*.css', styles)
watch('src/js/**/*.js', scripts)

exports.styles = styles
exports.htmlMinify = htmlMinify
exports.scripts = scripts
exports.default = series(htmlMinify, styles, scripts, images, fonts, watchFiles)

