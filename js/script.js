const initServisesSwiper = () => {
  const servisesSwiper = new Swiper('.services__swiper', {
    watchSlidesProgress: true,
    slideVisibleClass: 'services__slide_visible',
    loop: true,
    
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },

      560: {
        slidesPerView: 2,
        spaceBetween: 16,
      },

      760: {
        slidesPerView: 3,
        spaceBetween: 16,
      },

      960: {
        maxBackfaceHiddenSlides: 0,
      },
    },

    navigation: {
      prevEl: ".services__swiper__buttonPrev",
      nextEl: ".services__swiper__buttonNext",
    },
  
    pagination: {
      el: ".services__swiper__pagination",
      bulletClass: 'bullet',
      bulletActiveClass: 'bullet_current',
      clickable: true,
    },
  });

  return servisesSwiper;
};

let isSwiperInit = false;
let servisesSwiper = Swiper;

const setSwiperMode = () => {
  const isDisabledSwiperWidth = window.matchMedia(`(min-width: 960px)`).matches;

  if (!isDisabledSwiperWidth && !isSwiperInit){
    servisesSwiper = initServisesSwiper();
    isSwiperInit = true;
  }

  if (isDisabledSwiperWidth && isSwiperInit) {
    servisesSwiper.destroy();
    isSwiperInit = false;
  }
};

window.addEventListener('load', () => {
  setSwiperMode();
});

window.addEventListener('resize', () => {
  setSwiperMode();
});


new Swiper(".reviews__swiper", {
  watchSlidesProgress: true,
  slideVisibleClass: 'review__slide_visible',
  loop: true,

  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    560: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    760: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 16,
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
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 12,
    },
    560: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 12,
    },
    760: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 8,
    },
    960: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 28,
    },
    1700: {
      slidesPerView: 3,
      slidesPerGroup: 3,
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


// Закрытие модального окна сертификатов
// const certificatesModalElement = document.querySelector('.certificatesModal');
// const certificatesModalButtons = certificatesModalElement.querySelectorAll('.certificates__card');

// certificatesModalButtons.forEach(btn => {
//   btn.addEventListener('click', () => {
//     certificatesModal.close();
//   })
// })


/* Закрытие модального окна увеличенной картинки */
// const picture = document.querySelectorAll('.pictureModal');
// const picture = document.querySelectorAll('.picture');
// picture.forEach(item => {
//   const btn = item.querySelector('.pictureModal__close');
//   btn.addEventListener('click', () => {    
//     // pictureModal.close();
//     // certificatesModal.open();
//   })

//   const wrap = item.querySelector('.picture__wrap');
//   wrap.addEventListener('click', () => {    
//     // pictureModal.close();
//     // certificatesModal.open();
//   })
// })

// Инициализация модальных окон
const sidebarModal = new HystModal({
  linkAttributeName: "data-sidebar",
})

const certificatesModal = new HystModal({
  linkAttributeName: "data-certificates",
});

const certificateModal = new HystModal({
  linkAttributeName: "data-sertificate",
  afterClose: () => certificatesModal.open(),
});

const pictureModal = new HystModal({
  linkAttributeName: "data-review",
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