var path = require("path");
var gulp = require("gulp");
var babel = require("gulp-babel");
var rename = require("gulp-rename");
var plumber = require("gulp-plumber");
var connect = require("gulp-connect");
var nodemon = require("gulp-nodemon");

let js = ["src/routes/**/*.js"];

gulp.task("babelwatch", ()=> {
	gulp.watch(js, ["babel"]);
});
gulp.task("babel", ()=> {
	gulp.src(js)
		.pipe(plumber())
		.pipe(babel())
		.pipe(gulp.dest("routes/"))
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
		.pipe(connect.reload())
});





gulp.task("express", ["babelwatch"], ()=> {
	nodemon({
		script: "bin/www",
		ext: "js"
	})
});