// Gulpfile

"use strict";

// Imports
const { src, dest, series, parallel, watch } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create()
const cssnano = require("cssnano");
const clean = require("gulp-clean");
const htmlmin = require("gulp-htmlmin");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const replace = require("gulp-replace");
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
		.pipe(replace("main.css", "main.min.css"))
		.pipe(dest(paths.dist.html))
}

// Clean build folders
function cleanup() {
	return src(["build", "dist"], {
			read: false, 
			allowEmpty: true
		})
		.pipe(clean())
}

// Monitor file changes
function monitor() {
	watch(paths.source.sass, transpileSass).on('change', browserSync.reload)
	watch(paths.source.css, minifyCSS).on('change', browserSync.reload)
	watch(paths.source.html, copyHTML).on('change', browserSync.reload)
}

// Preview build
function livepreview() {
	browserSync.init({
        server: {
            baseDir: "./build",
        },
		browser: ["chrome"],
    });
	monitor();
}

// Exports
exports.transpileSass = transpileSass;
exports.minifyCSS = minifyCSS;
exports.copyHTML = copyHTML;
exports.cleanup = cleanup;
exports.monitor = monitor;
exports.livepreview = livepreview;

exports.build = series(
	cleanup,
	parallel(
		copyHTML, 
		series(transpileSass, minifyCSS)
	)
);

exports.default = series(
	exports.build,
	livepreview	
)
