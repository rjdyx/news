var gulp = require('gulp');
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var rename = require('gulp-rename');
var minifyCss = require("gulp-minify-css");
gulp.task('contact-minify-js-index', function() {
    gulp.src('js/index/*.js')
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(rename('index.min.js'))
        .pipe(gulp.dest('js/index'));
});

gulp.task('minify-css-index', function() {
    gulp.src('css/style.css')
        .pipe(minifyCss())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('css/index'));
});

gulp.task('contact-minify-css-login', function() {
    gulp.src('css/login/*.css')
        .pipe(concat('login.css'))
        .pipe(minifyCss())
        .pipe(rename('login.min.css'))
        .pipe(gulp.dest('css/login'));
});

gulp.task('contact-minify-js-login', function() {
    gulp.src('js/login/security.js')
        .pipe(uglify())
        .pipe(rename('security.min.js'))
        .pipe(gulp.dest('js/login'));
});

gulp.task('minify-common-css', function() {
    gulp.src('fonts/linecons/css/linecons.css')
        .pipe(minifyCss())
        .pipe(rename('linecons.min.css'))
        .pipe(gulp.dest('fonts/linecons/css'));
    gulp.src('css/bootstrap.css')
        .pipe(minifyCss())
        .pipe(rename('bootstrap-3.min.css'))
        .pipe(gulp.dest('css'));
    gulp.src('css/xenon-core.css')
        .pipe(minifyCss())
        .pipe(rename('xenon-core.min.css'))
        .pipe(gulp.dest('css'));
    gulp.src('css/custom.css')
        .pipe(minifyCss())
        .pipe(rename('custom.min.css'))
        .pipe(gulp.dest('css'));
    gulp.src('css/passage.css')
        .pipe(minifyCss())
        .pipe(rename('passage.min.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('uglify-common-js', function() {
    gulp.src('js/resizeable.js')
        .pipe(uglify())
        .pipe(rename('resizeable.min.js'))
        .pipe(gulp.dest('js'));
    gulp.src('js/xenon-toggles.js')
        .pipe(uglify())
        .pipe(rename('xenon-toggles.min.js'))
        .pipe(gulp.dest('js'));
    gulp.src('js/joinable.js')
        .pipe(uglify())
        .pipe(rename('joinable.min.js'))
        .pipe(gulp.dest('js'));
    gulp.src('js/xenon-custom.js')
        .pipe(uglify())
        .pipe(rename('xenon-custom.min.js'))
        .pipe(gulp.dest('js'));
    gulp.src('js/downLoad.js')
        .pipe(uglify())
        .pipe(rename('downLoad.min.js'))
        .pipe(gulp.dest('js'));
    gulp.src('js/edit-article.js')
        .pipe(uglify())
        .pipe(rename('edit-article.min.js'))
        .pipe(gulp.dest('js'));
    gulp.src('js/supervisor.js')
        .pipe(uglify())
        .pipe(rename('supervisor.min.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('contact-minify-js-add-links', function() {
    gulp.src('js/add-links/*.js')
        .pipe(uglify())
        .pipe(rename('add-links.min.js'))
        .pipe(gulp.dest('js/add-links'));
});

gulp.task('contact-minify-js-add-nav', function() {
    gulp.src('js/add-nav/*.js')
        .pipe(concat('add-links.js'))
        .pipe(uglify())
        .pipe(rename('add-nav.min.js'))
        .pipe(gulp.dest('js/add-nav'));
});