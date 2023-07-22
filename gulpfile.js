// Gulpfile

"use strict";

// Imports
const { src, dest, watch } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");

// Paths
let paths = {
	source: {
		sass: "./src/assets/styles/sass/**/*.scss",
	},
	build: {
		css: "./build/css",
	},
	dist: {
		css: "./dist/css",
	},
};

// Transpile Sass files
function transpileSass() {
	return src(paths.source.sass)
		.pipe(sourcemaps.init())
		.pipe(sass().on("error", sass.logError))
		.pipe(postcss(autoprefixer({browsers: ['last 1 version']})))
		.pipe(sourcemaps.write("."))
		.pipe(dest(paths.build.css));
}

// Monitor file changes
function monitor() {
	return watch(paths.source.sass, transpileSass);
}

// Exports
exports.transpileSass = transpileSass;
exports.monitor = monitor;
