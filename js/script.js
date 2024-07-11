new Swiper(".reviews__swiper", {
  watchSlidesProgress: true,
  slideVisibleClass: 'review__slide_visible',
  loop: true,

  // autoplay: {
  //   delay: 3000,
  //   pauseOnMouseEnter: true,
  // },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    624: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1060: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
    1700: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },

  navigation: {
    prevEl: ".reviews__swiper__buttonPrev",
    nextEl: ".reviews__swiper__buttonNext",
  },

  pagination: {
    el: ".reviews__swiper__pagination",
    bulletClass: 'reviews__swiper__bullet',
    bulletActiveClass: 'reviews__swiper__bullet_current',
    clickable: true,
  },
});

new Swiper(".inviteUs__swiper", {
  navigation: {
    prevEl: ".inviteUs__swiperPrev",
    nextEl: ".inviteUs__swiperNext",
  },
  pagination: {
    el: ".inviteUs__swiperPagination",
    clickable: true,
  },
  slidesPerView: 3,
  slidesPerGroup: 3,
  autoHeight: true,

  loop: true,
  breakpoints: {
    320: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 12,
    },
    750: {
      autoHeight: false,
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      autoHeight: true,
      slidesPerGroup: 3,
      slidesPerView: 3,
      // spaceBetween: 60,
    },
  },
});

// плавный скролл к якорю
// const smoothLinks = document.querySelectorAll('a[href^="#"]');
// for (let smoothLink of smoothLinks) {
//   smoothLink.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = smoothLink.getAttribute("href");

//     document.querySelector(id).scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   });
// }

// Логика сайдбара.
// const sidebar = document.querySelector(".sidebar");
// const burger = document.querySelector(".header__hamburgerButton");
// const close = document.querySelector(".sidebar__close");
// const sidebarLinks = document.querySelectorAll(".sidebar__listItem");
// const layout = document.querySelector(".layout");

// function sidebarManipulation(action) {
//   if (action == "open") {
//     layout.classList.add("layout_visible");
//     setTimeout(() => {
//       layout.classList.add("layout_visible2");
//       setTimeout(() => {
//         sidebar.classList.add("sidebar_opened");
//       }, 10);
//     }, 10);
//   } else if (action == "close") {
//     sidebar.classList.remove("sidebar_opened");
//     layout.classList.remove("layout_visible2");

//     setTimeout(() => {
//       layout.classList.remove("layout_visible");
//     }, 300);
//   }
// }

// burger.addEventListener("click", () => {
//   sidebarManipulation("open");
// });

// close.addEventListener("click", () => {
//   sidebarManipulation("close");
// });

// sidebarLinks.forEach((sidebarLink) => {
//   sidebarLink.addEventListener("click", (e) => {
//     sidebarManipulation("close");
//   });
// });

// layout.addEventListener("click", (e) => {
//   if (e.target.classList.contains("layout")) {
//     sidebarManipulation("close");
//   }
// });

// Сайдбар
const header = document.querySelector('.header');
const sidebar = document.querySelector('.sidebar');
const links = sidebar.querySelectorAll('.sidebar__list__link');

const getElementByLink = (link) => document.querySelector(link.getAttribute('href'));

const setScrollMarginTop = () => {
  links.forEach(link => {
    // const id = link.getAttribute('href');
    // const element = document.querySelector(id);
    
    const element = getElementByLink(link);
    const headerHeigt = header.clientHeight;
    element.style.scrollMarginTop = `${headerHeigt}px`;
  });
}

// window.addEventListener('load', () => {
//   setScrollMarginTop();
// })

// window.addEventListener('resize', () => {
//   setScrollMarginTop();
// });

// links.forEach(link => {
//   link.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     // const id = link.getAttribute('href');
//     // const element = document.querySelector(id);

//     const element = getElementByLink(link);

//     sidebarModal.close();

//     element.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   });
// })

// Модальные окна
const sidebarModal = new HystModal({
  linkAttributeName: "data-sidebar",
})

const certificatesModal = new HystModal({
  linkAttributeName: "data-certificates",
});

const certificateModal = new HystModal({
  linkAttributeName: "data-certificatemodal",
});

const feedbackModal = new HystModal({
  linkAttributeName: "data-feedback",
});

const servicesModal = new HystModal({
  linkAttributeName: "data-services",
});

const successModal = new HystModal({
  linkAttributeName: "data-success",
});

// Проверка формы обратной связи
const feedbackForm = document.querySelector(".feedbackModal__form");
// const feedbackSuccessText = document.querySelector(".feedbackModal__success");
const feedbackInputs = document.querySelectorAll(".feedbackModal__input");

feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();
  feedbackModal.close("#feedback-modal");
  successModal.open("#success-modal");
});

// Блок этапы
const STAGES_ITEM_CURRENT_CLASS = 'stages__item_current';
const stagesItems = document.querySelectorAll('.stages__item');

stagesItems.forEach(item => {
  const itemNumber = item.querySelector('.stages__item__number');

  itemNumber.addEventListener('click', () => {
    const itemCurrent = document.querySelector(`.${STAGES_ITEM_CURRENT_CLASS}`);

    if(item !== itemCurrent) {
      itemCurrent.classList.remove(STAGES_ITEM_CURRENT_CLASS);
      item.classList.add(STAGES_ITEM_CURRENT_CLASS);
    }
  })
});