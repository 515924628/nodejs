const path = require("path");
const gulp = require("gulp");
const babel = require("gulp-babel");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");
const connect = require("gulp-connect");
const nodemon = require("gulp-nodemon");

let js = ["src/routes/**/*.js"];
let html = ["src/public/**/*.html"];

gulp.task("babelwatch", ()=> {
	gulp.watch(js, ["babel"]);
});
gulp.task("babel", ()=> {
	gulp.src(js)
		.pipe(plumber())
		.pipe(babel())
		.pipe(gulp.dest("routes/"));
});


gulp.task("serve", ["connect", "babelwatch", "reloadwatch"]);

gulp.task("connect", ()=> {
	connect.server({
		root: "src",
		port: 3000,
		livereload: true
	});
});

gulp.task("reloadwatch", ()=> {
	gulp.watch(["public/**/*"], ["reload"]);
});

gulp.task("reload", ()=> {
	gulp.src("public/*")
		.pipe(connect.reload());
});


gulp.task("copy", ()=> {
	gulp.src(html)
		.pipe(gulp.dest("public/"));
});
gulp.task("express", ["babelwatch"], ()=> {
	gulp.watch(html, ["copy"]);
	nodemon({
		script: "bin/www",
		ext: "js"
	});
});