var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

var config = {
    source: {
        css: {
            dir: [
                "scss/**/*.scss",
                "scss/*.scss",
            ],
            target: "scss/*.scss"
        },
        angular: {
            dir: [
                "angular/*.js",
                "angular/**/*.js"
            ]
        }
    },
    dest: {
        css: {
            dir: "",
            index: "app.css"
        },
        js: {
            dir: "",
            index: "app.js"
        }
    }
};

gulp.task('fonts', function()
{
    return gulp.src('bower_components/mdi/fonts/**')
        .pipe(gulp.dest('fonts'));
});

gulp.task('sass', function () {
    gulp.src(config.source.css.target)
        .pipe(sass({
            includePaths: [
              'bower_components/bourbon/app/assets/stylesheets/',
              'bower_components/mdi/scss/',
              'bower_components/lumx/dist/scss/'
            ]
        }))
        .on('error', function (err) {
            console.log(err.message);
        })
        .pipe(concat(config.dest.css.index))
        .pipe(gulp.dest(config.dest.css.dir));
});

gulp.task('browserify', function () {
    gulp.src(config.source.angular.dir)
        // .pipe(browserify())
        .on('error', function (err) {
            console.log(err.message);
        })
        .pipe(concat(config.dest.js.index))
        .pipe(gulp.dest(config.dest.js.dir));
});

gulp.task('default', ['sass', 'browserify', 'fonts']);

gulp.task('watch', ['default'], function () {
    gulp.watch(config.source.css.dir, ['sass']);
    gulp.watch(config.source.angular.dir, ['browserify']);
});
