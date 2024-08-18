import gulp from 'gulp';
import sourcemap from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import csso from 'postcss-csso';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import htmlmin from 'gulp-htmlmin';
import terser from 'gulp-terser';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';


// HTML
export const html = () => {
  return gulp.src('index-full.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(rename('index.html'))
  .pipe(gulp.dest('min'))
}

// Styles
export const styles = () => {
  return gulp.src(`css/style.css`)
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(`css`))
}

// Scripts
export const scripts = () => {
  return gulp.src(`js/script.js`)
    .pipe(terser())
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest(`js`))
}

// Images
export const optimizeImages = () => {
  return gulp.src([`assets/img/logo/*.png`, `!assets/img/sprite`, `!assets/img/mask`, `!assets/img/icons`])
    .pipe(imagemin())
    .pipe(gulp.dest(`assets/img/logo`));
}

export const createWebp = () => {
  return gulp.src(`assets/img/advantages-bg/*.png`)
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest(`assets/img/advantages-bg`))
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
