import gulp from 'gulp';
// import plumber from 'gulp-plumber';
// import sourcemap from 'gulp-sourcemaps';
// import less from 'gulp-less';
// import postcss from 'gulp-postcss';
// import autoprefixer from 'autoprefixer';
// import csso from 'postcss-csso';
// import rename from 'gulp-rename';
// import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
// import svgstore from 'gulp-svgstore';

const SOURCE_FOLDER = 'source';
const PUBLIC_FOLDER = 'docs';

// HTML
// export const html = () => {
//   return gulp.src(`${SOURCE_FOLDER}/*.html`)
//   .pipe(htmlmin({ collapseWhitespace: true }))
//   .pipe(gulp.dest(PUBLIC_FOLDER))
//   .pipe(browser.stream());
// }

// Styles
// export const styles = () => {
//   return gulp.src(`${SOURCE_FOLDER}/less/style.less`, { sourcemaps: true })
//     .pipe(plumber())
//     .pipe(sourcemap.init())
//     .pipe(less())
//     .pipe(postcss([
//       autoprefixer(),
//       csso()
//     ]))
//     .pipe(rename('style.min.css'))
//     .pipe(sourcemap.write('.'))
//     .pipe(gulp.dest(`${PUBLIC_FOLDER}/css`))
//     .pipe(browser.stream());
// }

// Scripts
// export const scripts = () => {
//   return gulp.src(`${SOURCE_FOLDER}/js/*.js`)
//     .pipe(webpack({
//       mode: 'development',
//       devtool: 'source-map',
//       output: {
//           filename: 'app.min.js',
//       }
//     }))
//     .pipe(gulp.dest(`${PUBLIC_FOLDER}/js`))
//     .pipe(browser.stream());
// }

// Images
export const optimizeImages = () => {
  return gulp.src([
    `${SOURCE_FOLDER}/img/**/*.{png,jpg,svg}`,
    `!${SOURCE_FOLDER}/img/sprite/*`
  ])
    .pipe(imagemin())
    .pipe(gulp.dest(`${PUBLIC_FOLDER}/img`));
}

// export const copyImages = () => {
//   return gulp.src([
//     `${SOURCE_FOLDER}/img/**/*.{png,jpg,svg}`,
//     `!${SOURCE_FOLDER}/img/sprite/*`
//   ])
//     .pipe(gulp.dest(`${PUBLIC_FOLDER}/img`));
// }

// export const createWebp = () => {
//   return gulp.src([
//     `${SOURCE_FOLDER}/img/**/*.{jpg,png}`,
//     `!${SOURCE_FOLDER}/img/favicons/*`
//   ])
//     .pipe(webp({quality: 90}))
//     .pipe(gulp.dest(`${PUBLIC_FOLDER}/img`))
// }

export const createWebp = () => {
  return gulp.src([
    `assets/img/guarantees/*.png`,
  ])
    .pipe(webp({quality: 100}))
    .pipe(gulp.dest(`assets/img/guarantees`))
}

// Copy
// export const copy = (done) => {
//   gulp.src([
//     `${SOURCE_FOLDER}/fonts/*.ttf`,
//     `${SOURCE_FOLDER}/swiper/*.min.*`
//   ], {
//     base: `${SOURCE_FOLDER}`
//   })
//     .pipe(gulp.dest(PUBLIC_FOLDER))
//   done();
// }
