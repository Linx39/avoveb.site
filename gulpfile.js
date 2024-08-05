import gulp from 'gulp';
// import plumber from 'gulp-plumber';
import sourcemap from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import rename from 'gulp-rename';
import htmlmin from 'gulp-htmlmin';
import terser from 'gulp-terser';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
// import svgstore from 'gulp-svgstore';

const SOURCE_FOLDER = 'avoveb.site';
const PUBLIC_FOLDER = 'min';

// HTML
export const html = () => {
  return gulp.src(`*.html`)
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(rename('index.min.html'))
  .pipe(gulp.dest(PUBLIC_FOLDER))
}

// Styles
export const styles = () => {
  return gulp.src(`css/style.css`)
    // .pipe(sourcemap.init())
    .pipe(postcss([
      autoprefixer(),
      cssnano()
    ]))
    .pipe(rename('style.min.css'))
    // .pipe(sourcemap.write('.'))
    .pipe(gulp.dest(`css`))
}

// Scripts
export const scripts = () => {
  return gulp.src(`js/hystmodal.js`)
    .pipe(terser())
    .pipe(rename('hystmodal.min.js'))
    .pipe(gulp.dest(`js`))
}

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
    `assets/img/certificates/*.png`,
  ])
    .pipe(webp({quality: 100}))
    .pipe(gulp.dest(`assets/img/certificates`))
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
