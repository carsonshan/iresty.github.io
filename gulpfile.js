/**
 * 实现把js压缩放置在html的script标签 用inlinesource
 *
 * gulp-imagemin使用：(http://www.dtao.org/archives/26)
 */
'use strict'

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
// var clean = require('gulp-clean');
var cache = require('gulp-cache');
var inlinesource = require('gulp-inline-source');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('test', function() {
	return gulp.src(['index.js', 'test.js'])
		.pipe(concat('testandindex.js'))
		.pipe(gulp.dest('scripts'));
});

gulp.task('inlinesource', function() {
	return gulp.src('index.html')
		.pipe(inlinesource())
		.pipe(gulp.dest('.'));
});

gulp.task('imagemin', function() {
	return gulp.src('images/*')
		.pipe(imagemin({
			// 无损压缩jpg
			progressive: true,
			use: [pngquant()]
		}))
		.pipe(gulp.dest('images/'));
});

gulp.task('default', ['inlinesource', 'imagemin']);

// gulp.watch('src/**', ['inlinesource']);