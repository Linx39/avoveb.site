const initServisesSwiper = () => {
  const servisesSwiper = new Swiper('.services__swiper', {
    watchSlidesProgress: true,
    slideVisibleClass: 'services__slide_visible',
    loop: true,
    
    // autoplay: {
    //   delay: 2000,
    //   pauseOnMouseEnter: true,
    // },

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
      bulletClass: 'slider__bullet',
      bulletActiveClass: 'slider__bullet_current',
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
  loopAddBlankSlides: false,

  // autoplay: {
  //   delay: 2000,
  //   pauseOnMouseEnter: true,
  // },

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
    disabledClass: ".navigationButton_disabled",
  },

  pagination: {
    el: ".reviews__swiper__pagination",
    bulletClass: 'slider__bullet',
    bulletActiveClass: 'slider__bullet_current',
  },
});

new Swiper(".certificates__swiper", {
  // loop: true,
  // loopAddBlankSlides: false,

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
    disabledClass: "navigationButton_transparent_disabled",
  },

  pagination: {
    el: ".certificates__swiper__pagination",
    bulletClass: 'slider__bullet',
    bulletActiveClass: 'slider__bullet_current',
  },
});


// Сайдбар
const headerMenu = document.querySelector('.header__topbar');
const sidebar = document.querySelector('.sidebar');
const sidebarLinks = sidebar.querySelectorAll('.sidebar__link');

const getElementByHref = (link) => document.querySelector(link.getAttribute('href'));

const setScrollMarginTop = () => {
  sidebarLinks.forEach(link => {    
    const element = getElementByHref(link);
    const headerHeigt = headerMenu.clientHeight;
    element.style.scrollMarginTop = `${headerHeigt}px`;
  });
}

window.addEventListener('load', () => {
  setScrollMarginTop();
})

window.addEventListener('resize', () => {
  setScrollMarginTop();
});

screen.addEventListener('orientationchange', function () {
  setScrollMarginTop();
});

sidebarLinks.forEach(link => {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    const element = getElementByHref(link);

    sidebarModal.close();

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
})


// Управление анимацией модальных окон
const MODAL_ANIMATION_CLASS = 'modalAnimation';

setAnimationTrue = (modal, animationClass) => {
  if (modal._modalBlock) {
    modal._modalBlock.classList.add(animationClass);
    modal.config.waitTransitions = true;
  }
}

setAnimationFalse = (modal, animationClass) => {
  if (modal._modalBlock) {
    modal._modalBlock.classList.remove(animationClass);
    modal.config.waitTransitions = false;
  }
}

// Инициализация модальных окон
const fixedElements = ['.scrollUp'];

const sidebarModal = new HystModal({
  linkAttributeName: "data-sidebar",
  fixedSelectors: fixedElements,
})

const servicesModal = new HystModal({
  linkAttributeName: "data-services",
  fixedSelectors: fixedElements,
  waitTransitions: true,
});

const feedbackModal = new HystModal({
  linkAttributeName: "data-feedback",
  fixedSelectors: fixedElements,
  waitTransitions: true,
  beforeOpen: () => {
    setAnimationFalse(servicesModal, MODAL_ANIMATION_CLASS);
    servicesModal.close();
  },
  afterClose: () => {
    setAnimationTrue(servicesModal, MODAL_ANIMATION_CLASS);
  },
});

const certificatesModal = new HystModal({
  linkAttributeName: "data-certificates",
  fixedSelectors: fixedElements,
  waitTransitions: true,
});

const certificateModal = new HystModal({
  linkAttributeName: "data-sertificate",
  fixedSelectors: fixedElements,
  waitTransitions: true,
  beforeOpen: () => {
    setAnimationFalse(certificatesModal, MODAL_ANIMATION_CLASS);
    certificatesModal.close();
  },
  afterClose: () => {
    certificatesModal.open();
    setAnimationTrue(certificatesModal, MODAL_ANIMATION_CLASS);
  },
});

const reviewModal = new HystModal({
  linkAttributeName: "data-review",
  fixedSelectors: fixedElements,
  waitTransitions: true,
});


// Скролл к началу страницы
const SCROLL_UP_SHOW_CLASS = 'scrollUp_show';
const SCROLL_HEIGHT = window.innerHeight;

const scrollUp = document.querySelector('.scrollUp');

const btnUp = document.querySelector('.scrollUp__button');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > SCROLL_HEIGHT) {
    scrollUp.classList.add(SCROLL_UP_SHOW_CLASS);
  } else {
    scrollUp.classList.remove(SCROLL_UP_SHOW_CLASS);
  }
});


btnUp.addEventListener('click', (evt) => {
  evt.preventDefault();
  window.scrollTo({
    top: 0, 
    behavior: 'smooth',
  });
});


// Блок этапы
const STAGES_ITEM_CURRENT_CLASS = 'stages__item_current';
const STAGES_ITEM_NEARBY_CLASS = 'stages__item_nearby';

const stagesItems = document.querySelectorAll('.stages__item');

stagesItems.forEach(item => {
  item.addEventListener('click', () => {
    const itemCurrent = document.querySelector(`.${STAGES_ITEM_CURRENT_CLASS}`);

    if(item !== itemCurrent) {
      stagesItems.forEach(item => item.classList.remove(STAGES_ITEM_NEARBY_CLASS));
      
      itemCurrent.classList.remove(STAGES_ITEM_CURRENT_CLASS);
      item.classList.add(STAGES_ITEM_CURRENT_CLASS);

      const stagesItemsArray = [...stagesItems];
      const index = stagesItemsArray.indexOf(item);

      console.log(stagesItemsArray[index + 1]);

      if(stagesItemsArray[index - 1]) {
        stagesItemsArray[index - 1].classList.add(STAGES_ITEM_NEARBY_CLASS);
      }

      if(stagesItemsArray[index + 1]) {
        stagesItemsArray[index + 1].classList.add(STAGES_ITEM_NEARBY_CLASS);
      }      
    }
  })
});
