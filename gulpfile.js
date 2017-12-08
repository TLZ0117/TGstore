var 
    gulp = require('gulp'),
    cleancss = require('gulp-clean-css'),
    sass = require('gulp-ruby-sass'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat');
 

//编译sass文件
gulp.task('sass',function(){
   return sass('./src/sass/*.scss',{
        sourcemap: false,
        style:'compressed',
    }).pipe(gulp.dest('./dist/css/'));
});

//压缩js文件
gulp.task('minifyjs',function(){
    return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});

// 监听Html
gulp.task('html', ['sass', 'minifyjs'], function () {
    return gulp.src('./index.html').pipe(connect.reload());
});

// 监听
gulp.task('default', ['sass', 'minifyjs'], function () {
    // 开启服务器
    connect.server({
        port: 9001,
        livereload: true
    });
    gulp.watch('./src/sass/*.scss', ['html']);
    gulp.watch('./src/js/*.js', ['html']);
});
