const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');
const pathmod = require('pathmodify');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');
const zip = require('gulp-zip');
const fs = require('fs');
const path = require('path');
const es = require('event-stream');
const Promise = require('bluebird');

const production = !! gutil.env.production

function buildClient(watch, done) {
  var bundler =
    browserify('./src/index.js', { debug: true })
      .plugin(pathmod, {mods: [
        pathmod.mod.dir('node_modules', __dirname + '/node_modules'),
      ]})
      // Transform JSX      https://github.com/andreypopp/reactify/issues/58
      // Fix unexpected ... https://github.com/babel/babel-loader/issues/170
      .transform(babelify, { presets: ['es2015', 'stage-0', 'react'] });
  return new Promise(function (resolve, reject) {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('server.js'))
      .pipe(buffer())
      // https://knpuniversity.com/screencast/gulp/minify-only-production
      .pipe(production ? uglify() : gutil.noop())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(path.normalize(__dirname + '/../express/public')))
      .on('end', resolve);
  });
}

function extractMarkdown() {
  // return new Promise(function (resolve, reject) {
    return fs.readdirAsync('src/markdown')
    .then(subdirs => Promise.reduce(
      subdirs,
      (carry, dir) =>
        fs.readdirAsync('src/markdown/' + dir)
        .then(files => Promise.reduce(
          files,
          (carry, f) => fs.readFileAsync('src/markdown/' + dir + '/' + f)
            .then(buf => buf.toString())
            .then(content => {
              const basename = path.basename(f, '.md');
              const re = /(\d+)\. (.*)/;
              const matches = basename.match(re);
              const title = ! matches ? basename :
                parseInt(matches[1], 10) + '. ' + matches[2];
              return carry.concat({
                title,
                path: '/' + slugify(title),
                content
              });
            }),
          []
        ))
        .then(items => carry.concat({ title: dir, path: '/' + slugify(dir), items })),
      []
    ))
    .then(JSON.stringify)
    .then(markdownJson => fs.writeFileAsync('src/resources/markdown.json', markdownJson))
  // });
}

// function makeZip(cb) {
//   return extractThemeVersion()
//     .then(themeVersion => {
//       var base = 'dist/' + themeVersion;
//       var tmp = base + '/reago';
//       var rebasedFiles = base + '/**/*';
//       es.concat(
//           gulp.src(archiveFiles)
//               .pipe(gulp.dest(tmp)),
//             gulp.src(builtFiles)
//                 .pipe(gulp.dest( tmp + '/js')),
//           gulp.src(rebasedFiles, { base })
//               .pipe(zip(themeName + '-' + themeVersion + '.zip'))
//               .pipe(gulp.dest('dist'))
//       ).on('end', cb)
//     });
// }

gulp.task('watch', function() {
  gulp.watch(['src'], buildClient);
  // gulp.watch(watchedFiles, extractMarkdown);
});

gulp.task('buildClient', function() {
  return buildClient();
});
//
// gulp.task('extractMarkdown', function() {
//   return extractMarkdown();
// });

// gulp.task('makeZip', makeZip);

gulp.task('default', gulp.series('buildClient', 'watch'));
