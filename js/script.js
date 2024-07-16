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
    760: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    920: {
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
    bulletClass: 'bullet',
    bulletActiveClass: 'bullet_current',
    clickable: true,
  },
});

new Swiper(".certificates__swiper", {
  loop: true,

  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 12,
    },
    760: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 20,
    },
    920: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 28,
    },
    1700: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },

  navigation: {
    prevEl: ".certificates__swiper__buttonPrev",
    nextEl: ".certificates__swiper__buttonNext",
  },
  pagination: {
    el: ".certificates__swiper__pagination",
    bulletClass: 'bullet',
    bulletActiveClass: 'bullet_current',
    clickable: true,
  },
});

// Логика сайдбара.
// const sidebar = document.querySelector(".sidebar");
// const burger = document.querySelector(".header__menu__button");
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
const links = sidebar.querySelectorAll('.sidebar__link');

const getElementByLink = (link) => document.querySelector(link.getAttribute('href'));

const setScrollMarginTop = () => {
  links.forEach(link => {    
    const element = getElementByLink(link);
    const headerHeigt = header.clientHeight - 5;
    element.style.scrollMarginTop = `${headerHeigt}px`;
  });
}

window.addEventListener('load', () => {
  setScrollMarginTop();
})

window.addEventListener('resize', () => {
  setScrollMarginTop();
});

links.forEach(link => {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    const element = getElementByLink(link);

    sidebarModal.close();

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
})

// Сдвиг main относительно фиксированной шапки
const main = document.querySelector('.page__main');

const setMainMarginTop = () => {
  const headerHeigt = header.clientHeight - 5;
  main.style.marginTop = `${headerHeigt}px`;
}

window.addEventListener('load', () => {
  setMainMarginTop();
})

window.addEventListener('resize', () => {
  setMainMarginTop();
});

/* Закрытие модального окна услуг перед открытием формы заявки */
// const servicesModalElements = document.querySelectorAll('.servicesModal');

// servicesModalElements.forEach(item => {
//   const servicesModalButton = item.querySelector('.servicesModal__button');
//   servicesModalButton.addEventListener('click', () => {
//    servicesModal.close();
//   })
// })

/* Закрытие/открытие модального окна сертификатов перед открытием/закрытием увеличенной картинки */
const certificatesModalElement = document.querySelector('.certificatesModal');
const certificatesModalButtons = certificatesModalElement.querySelectorAll('.certificates__card');

// certificatesModalButtons.forEach(btn => {
//   btn.addEventListener('click', () => {
//     certificatesModal.close();
//   })
// })

// const pictureModalElements = document.querySelectorAll('.pictureModal');
// pictureModalElements.forEach(item => {
//   const btn = item.querySelector('.pictureModal__close');

//   btn.addEventListener('click', () => {
//     console.log(certificatesModal.config);
//     console.log(servicesModal.isOpened);

//     certificatesModal.isOpened = true;
//     console.log(servicesModal.isOpened);
//     // certificatesModal.open('#certificates-modal');
//   })
// })

// Модальные окна
const sidebarModal = new HystModal({
  linkAttributeName: "data-sidebar",
})

const certificatesModal = new HystModal({
  linkAttributeName: "data-certificates",
});

const pictureModal = new HystModal({
  linkAttributeName: "data-picturemodal",
});

const servicesModal = new HystModal({
  linkAttributeName: "data-services",
});

const feedbackModal = new HystModal({
  linkAttributeName: "data-feedback",
});

const successModal = new HystModal({
  linkAttributeName: "data-success",
});

// Проверка формы обратной связи
const feedbackForm = document.querySelector(".feedbackModal__form");
// const feedbackSuccessText = document.querySelector(".feedbackModal__success");
const feedbackInputs = document.querySelectorAll(".feedbackModal__input");

// feedbackForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   feedbackModal.close("#feedback-modal");
//   successModal.open("#success-modal");
// });

// Блок этапы
const STAGES_ITEM_CURRENT_CLASS = 'stages__item_current';
const stagesItems = document.querySelectorAll('.stages__item');

stagesItems.forEach(item => {
  // const itemNumber = item.querySelector('.stages__item__number');

  item.addEventListener('click', () => {
    const itemCurrent = document.querySelector(`.${STAGES_ITEM_CURRENT_CLASS}`);

    if(item !== itemCurrent) {
      itemCurrent.classList.remove(STAGES_ITEM_CURRENT_CLASS);
      item.classList.add(STAGES_ITEM_CURRENT_CLASS);
    }
  })
});