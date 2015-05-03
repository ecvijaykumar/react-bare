var gulp = require('gulp'),
browserify = require('gulp-browserify'),
minifyCSS = require('gulp-minify-css'),
uglify = require('gulp-uglify'),
reactify = require('reactify'),
rimraf = require('gulp-rimraf'),
rename = require('gulp-rename'),
concat = require('gulp-concat'),
less = require('gulp-less');



gulp.task('styles', function() {
    gulp.src('src/less/myapp.less')
	.pipe(less())
	.pipe(gulp.dest('src/css'))
	.pipe(rename({suffix: '.min'}))
	.pipe(minifyCSS())
	.pipe(gulp.dest('./public/dist/css'));
});

gulp.task('clean', function() {
    gulp.src(['dist/js/app*/', 'src/css/*'])
    .pipe(rimraf());
});

gulp.task('scripts', function() {
    gulp.src('./src/js/app.jsx', { read: false})
	.pipe(browserify({
	    insertGlobals: false,
	    debug: true,
	    transform: ['reactify'],
	    extensions: ['.jsx'] 
	}))
	// .pipe(uglify({
	//     mangle: {
	// 	except: ['require'] //Dont touch the require folder
	//     }
	// }))
	.pipe(rename({extname: '.min.js'}))
	.pipe(gulp.dest('./public/dist/js/'))
});

gulp.task('static', function() {
    gulp.src('static/images/*')
	.pipe(gulp.dest('./public/dist/css/images')); 

});

var paths = {
  scripts: ['./src/js/app.jsx', './src/js/comp/**/*.jsx', './src/js/**/*.js'],
  styles: './src/less/*.less'
};
// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.styles, ['styles']);
});

gulp.task('default', ['watch','scripts', 'styles', 'static']);


