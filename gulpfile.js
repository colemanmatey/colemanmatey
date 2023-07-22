// Gulpfile

"use strict";

// Imports
const { src, dest, watch } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("cssnano");
const htmlmin = require("gulp-htmlmin");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");

// Paths
let paths = {
	source: {
		html: "./src/**/*.html",
		sass: "./src/assets/styles/sass/**/*.scss",
		css: "./build/**/*.css"
	},
	build: {
		html: "./build",
		css: "./build/css",
	},
	dist: {
		html: "./dist",
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

// Minify CSS
function minifyCSS() {
	return src(paths.source.css)
		.pipe(sourcemaps.init())
		.pipe(postcss([cssnano()]))
		.pipe(rename({
			dirname: ".",
			suffix: ".min"
		}))
		.pipe(sourcemaps.write("."))
		.pipe(dest(paths.dist.css));
}

// Copy HTML
function copyHTML() {
	return src(paths.source.html)
		.pipe(dest(paths.build.html))
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(dest(paths.dist.html))
}

// Monitor file changes
function monitor() {
	watch(paths.source.sass, transpileSass);
	watch(paths.source.css, minifyCSS);
}

// Exports
exports.transpileSass = transpileSass;
exports.minifyCSS = minifyCSS;
exports.copyHTML = copyHTML;
exports.monitor = monitor;
