var gulp = require ('gulp'),
watch = require ('gulp-watch');

gulp.task('default', function(){
    
    console.log("Hello Gulp");
});

gulp.task('html', function(){

    console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('watch', function(){

    watch('./app/index.html', function(){
        gulp.task('html');
    });
});