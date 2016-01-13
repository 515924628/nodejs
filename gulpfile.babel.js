var path = require("path");
var gulp = require("gulp");
var babel = require("gulp-babel");
var rename = require("gulp-rename");
var plumber = require("gulp-plumber");
var connect = require("gulp-connect");
var nodemon = require("gulp-nodemon");

let ignore = [
	"!node_modules/**/*",
	"!bundle/**/*",
	"!.idea/**/*",
	"!gulpfile.babel.js",
	"!webpack.config.babel.js"
];

gulp.task("babelwatch", ()=> {
	gulp.watch(["**/*.babel.js", ...ignore], ["babel"]);
});
gulp.task("babel", ()=> {
	gulp.src(["**/*.babel.js", ...ignore])
		.pipe(plumber())
		.pipe(rename((path)=> {
			var basename = path.basename;
			path.basename = basename.substr(0, basename.length - 6);
		}))
		.pipe(babel())
		.pipe(gulp.dest("./"))
});

gulp.task("staticserve", ["connect", "staticwatch"]);

gulp.task("connect", ()=> {
	connect.server({
		root: "src",
		port: 3000,
		livereload: true
	});
});
gulp.task("staticwatch", ()=> {
	gulp.watch(["**/*.babel.js", ...ignore], ["babel"]);
	gulp.watch(["public/*", "bundle/*", ...ignore], ["reload"]);
});
gulp.task("reload", ()=> {
	gulp.src("public/*")
		.pipe(connect.reload())
});

gulp.task("express",["babelwatch"], ()=> {
	nodemon({
		script: "bin/www",
		ignore: ["*.babel.js"],
		ext: "js"
	})
});