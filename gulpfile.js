const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const sass = gulpSass(require('sass'));
gulp.task('sass', async function(){
    gulp.src('src/componenets/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'));
})
gulp.task('watch', async function(){
    gulp.watch('src/componenets/**/*.scss', async function(){
        gulp.src('src/componenets/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'));
    })
})