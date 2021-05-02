// @ts-nocheck
const webpack = require("webpack-stream");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();
var useref = require("gulp-useref");
var uglify = require("gulp-uglify");
var gutil = require("gulp-util");
var gulpIf = require("gulp-if");
var cssnano = require("gulp-cssnano");
var del = require("del");
var runSequence = require("run-sequence");
var babel = require("gulp-babel");
var historyApiFallback = require("connect-history-api-fallback");
const { series, src, dest, watch } = require("gulp");
const browserify = require("browserify");
const babelify = require("babelify");
const source = require("vinyl-source-stream");

function cleanJS(cb) {
  del.sync("./js");
  cb();
}
// gulp.task("clean:minjs", function() {
//   return del.sync("./js");
// });

function cleanCSS(cb) {
  del.sync("./css");
  cb();
}
// gulp.task("clean:css", function() {
//   return del.sync("./css");
// });

function cleanIndex(cb) {
  del.sync("./index.html");
  cb();
}
// gulp.task("clean:index", function() {
//   return del.sync("./index.html");
// });

function cleanAssets(cb) {
  del.sync("./assets");
  cb();
}
// gulp.task("clean:assets", function() {
//   return del.sync("./assets");
// });

function cleanApp(cb) {
  del.sync("app/js");
  cb();
}
// gulp.task("clean:js", function() {
//   return del.sync("app/js");
// });

const cleanup = series(cleanJS, cleanCSS, cleanIndex, cleanAssets, cleanApp);
exports.cleanup = cleanup;

// To prevent rewriting the source and build folder locations
const paths = {
  source: "app/es6/app.js",
  build: "app/js",
};

// Let's write our task in a function to keep things clean
function javascriptBuild() {
  // Start by calling browserify with our entry pointing to our main javascript file
  return (
    browserify({
      entries: [`${paths.source}`],
      // Pass babelify as a transform and set its preset to @babel/preset-env
      transform: [babelify.configure({ presets: ["@babel/preset-env"] })],
    })
      // Bundle it all up!
      .bundle()
      // Source the bundle
      .pipe(source("main.js"))
      // Then write the resulting files to a folder
      .pipe(dest(`${paths.build}`))
  );
}

// function compileTask(cb) {
//   src("app/es6/**/*.js")
//     .pipe(
//       babel({
//         presets: ["es2015", "stage-0"],
//         plugins: ["transform-class-properties"],
//       })
//     )
//     .pipe(dest("app/js"));
//   cb();
// }

const compile = series(cleanup, javascriptBuild);
exports.compile = compile;

// // gulp.task(
// //   "compile-es6",
// //   ["clean:minjs", "clean:js", "clean:index", "clean:assets"],
// //   function () {
// //     return gulp
// //       .src("app/es6/**/*.js")
// //       .pipe(
// //         babel({
// //           presets: ["es2015", "stage-0"],
// //           plugins: ["transform-class-properties"],
// //         })
// //       )
// //       .pipe(gulp.dest("app/js"));
// //   }
// // );

// function webpackTask(cb) {
//   src("app/js/*.js")
//     .pipe(webpack({ output: { filename: "main.js" } }))
//     .pipe(dest("app/js"));
//   cb();
// }

// const pack = series(compile, webpackTask);
// exports.pack = pack;

// // gulp.task("webpack", ["compile-es6"], function () {
// //   return gulp
// //     .src("app/js/*.js")
// //     .pipe(webpack({ output: { filename: "main.js" } }))
// //     .pipe(gulp.dest("app/js"));
// // });

function userefTask(cb) {
  src("app/*.html")
    .pipe(useref())
    .pipe(gulpIf("*.js", uglify()))
    .on("error", function (err) {
      gutil.log(gutil.colors.red("[Error]"), err.toString());
    })
    .pipe(gulpIf("*.css", cssnano()))
    .pipe(dest("./"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
  cb();
}

const ref = series(compile, userefTask);
exports.ref = ref;

// // gulp.task("useref", ["webpack"], function () {
// //   return gulp
// //     .src("app/*.html")
// //     .pipe(useref())
// //     .pipe(gulpIf("*.js", uglify()))
// //     .on("error", function (err) {
// //       gutil.log(gutil.colors.red("[Error]"), err.toString());
// //     })
// //     .pipe(gulpIf("*.css", cssnano()))
// //     .pipe(gulp.dest("./"))
// //     .pipe(
// //       browserSync.reload({
// //         stream: true,
// //       })
// //     );
// // });

function sassTask(cb) {
  src("app/scss/**/*.scss")
    .pipe(sass())
    .pipe(dest("app/css"))
    .pipe(dest("css"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
  cb();
}

// // gulp.task("sass", function () {
// //   return gulp
// //     .src("app/scss/**/*.scss")
// //     .pipe(sass())
// //     .pipe(gulp.dest("app/css"))
// //     .pipe(gulp.dest("css"))
// //     .pipe(
// //       browserSync.reload({
// //         stream: true,
// //       })
// //     );
// // });

function fontsTask(cb) {
  src("app/fonts/**/*").pipe(dest("assets/fonts"));
  cb();
}

// // gulp.task("fonts", function () {
// //   return gulp.src("app/fonts/**/*").pipe(gulp.dest("assets/fonts"));
// // });

function imagesTask(cb) {
  src("app/images/**/*").pipe(dest("assets/images"));
  cb();
}
// // gulp.task("images", function () {
// //   return gulp.src("app/images/**/*").pipe(gulp.dest("assets/images"));
// // });

function videosTask(cb) {
  src("app/video/**/*").pipe(dest("assets/video"));
  cb();
}

const buildApp = series(ref, sassTask, fontsTask, imagesTask, videosTask);
exports.buildApp = buildApp;

// exports.build = buildTask;
// // gulp.task("build", [
// //   "clean:css",
// //   "clean:js",
// //   "clean:minjs",
// //   "clean:assets",
// //   "clean:index",
// //   "compile-es6",
// //   "webpack",
// //   "useref",
// //   "sass",
// //   "fonts",
// //   "images",
// // ]);

function watchApp(cb) {
  // You can use a single task
  watch("app/scss/**/*.scss", sassTask);
  // Or a composed task
  watch("app/*.html", browserSync.reload);
  watch("app/es6/**/*.js", buildApp, browserSync.reload);
  cb();
}
exports.watch = series(buildApp, watchApp);

// const watchTask = series(
//   watch("app/scss/**/*.scss", sassTask),
//   watch("app/*.html", browserSync.reload),
//   watch("app/es6/**/*.js", buildApp, browserSync.reload)
// );
// exports.watch = watchTask;

// // gulp.task("watch", ["browserSync"], function () {
// //   gulp.watch("app/scss/**/*.scss", ["sass"]);
// //   gulp.watch("app/*.html", browserSync.reload);
// //   gulp.watch("app/es6/**/*.js", ["build"], browserSync.reload);
// // });

const browserSyncTask = (cb) => {
  browserSync.init(null, {
    open: false,
    server: {
      baseDir: ".",
      middleware: [historyApiFallback()],
    },
  });
  cb();
};

// // gulp.task("browserSync", ["build"], function () {
// //   browserSync.init(null, {
// //     open: false,
// //     server: {
// //       baseDir: ".",
// //       middleware: [historyApiFallback()],
// //     },
// //   });
// // });

exports.default = series(browserSyncTask, watchApp);

// // gulp.task("default", function (callback) {
// //   runSequence(["browserSync", "watch"], callback);
// // });
