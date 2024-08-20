const initServisesSwiper = () => {
  const servisesSwiper = new Swiper('.services__swiper', {
    watchSlidesProgress: true,
    slideVisibleClass: 'services__slide_visible',
    loop: true,

    navigation: {
      prevEl: '.services__swiper__buttonPrev',
      nextEl: '.services__swiper__buttonNext',
    },
  
    pagination: {
      el: '.services__swiper__pagination',
      bulletClass: 'slider__bullet',
      bulletActiveClass: 'slider__bullet_current',
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
  });

  return servisesSwiper;
};

let isServisesSwiperInit = false;
let servisesSwiper = Swiper;

const setServisesSwiperMode = () => {
  const isDisabledSwiperWidth = window.matchMedia(`(min-width: 960px)`).matches;

  if (!isDisabledSwiperWidth && !isServisesSwiperInit){
    servisesSwiper = initServisesSwiper();
    isServisesSwiperInit = true;
  }

  if (isDisabledSwiperWidth && isServisesSwiperInit) {
    servisesSwiper.destroy();
    isServisesSwiperInit = false;
  }
};

window.addEventListener("DOMContentLoaded", () => {
  setServisesSwiperMode();
});

window.addEventListener('resize', () => {
  setServisesSwiperMode();
});

const initReviewsSwiper = () => {
  const isLoop = !navigator.userAgent.includes('Firefox');

  const reviewsSwiper = new Swiper('.reviews__swiper', {
    watchSlidesProgress: true,
    slideVisibleClass: 'review__slide_visible',
    loop: isLoop,

    navigation: {
      prevEl: '.reviews__swiper__buttonPrev',
      nextEl: '.reviews__swiper__buttonNext',
      disabledClass: 'navigationButton_disabled',
    },

    pagination: {
      el: '.reviews__swiper__pagination',
      bulletClass: 'slider__bullet',
      bulletActiveClass: 'slider__bullet_current',
      clickable: true,
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
  });

  return reviewsSwiper;
}

initReviewsSwiper();


new Swiper('.certificates__swiper', { 
  navigation: {
    prevEl: '.certificates__swiper__buttonPrev',
    nextEl: '.certificates__swiper__buttonNext',
    disabledClass: 'navigationButton_disabled',
  },

  pagination: {
    el: '.certificates__swiper__pagination',
    bulletClass: 'slider__bullet',
    bulletActiveClass: 'slider__bullet_current',
    clickable: true,
  },

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
});


// Сайдбар
const topbar = document.querySelector('.topbar');
const sidebar = document.querySelector('.sidebar');
const sidebarLinks = sidebar.querySelectorAll('.sidebar__link');

const getElementByHref = (link) => document.querySelector(link.getAttribute('href'));

const setScrollMarginTop = () => {
  sidebarLinks.forEach(link => {    
    const element = getElementByHref(link);
    const headerHeigt = topbar.clientHeight - 5;
    element.style.scrollMarginTop = `${headerHeigt}px`;
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setScrollMarginTop();
})

window.addEventListener('resize', () => {
  setScrollMarginTop();
});

let elementByLink = null;

sidebarLinks.forEach(link => {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    elementByLink = getElementByHref(link); 
  });
})

const scrollToLinks = (element) => {    
  if(element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

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


// Фон для видео
const HYSTMODAL_SHADOW_BLACK_CLASS = 'hystmodal__shadow_black';

const addShadowClass = () => {
  const hystmodalShadow = document.querySelector('.hystmodal__shadow');
  hystmodalShadow.classList.add(HYSTMODAL_SHADOW_BLACK_CLASS);
}

const removeShadowClass = () => {
  const hystmodalShadow = document.querySelector('.hystmodal__shadow');
  hystmodalShadow.classList.remove(HYSTMODAL_SHADOW_BLACK_CLASS);
}

// Видео
const SRC="https://dzen.ru/embed/v1t4CfPF7B00?from_block=partner&from=zen&mute=0&autoplay=1&tv=0";
const iframe = document.querySelector('.iframe');

const addIframeSrc = () => {
  iframe.src = SRC;
}

const deleteIframeSrc = () => {
  iframe.src = '';
}

// Инициализация модальных окон
const videoModal = new HystModal({
  linkAttributeName: "data-video",
  waitTransitions: true,
  beforeOpen: () => {
    addIframeSrc();
    addShadowClass();
  },
  afterClose: () => {
    deleteIframeSrc();
    removeShadowClass();
  },
});

const sidebarModal = new HystModal({
  linkAttributeName: "data-sidebar",
  waitTransitions: true,
  afterClose: () => scrollToLinks(elementByLink),
})

const servicesModal = new HystModal({
  linkAttributeName: "data-services",
  waitTransitions: true,
});

const feedbackModal = new HystModal({
  linkAttributeName: "data-feedback",
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
  waitTransitions: true,
});

const certificateModal = new HystModal({
  linkAttributeName: "data-sertificate",
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

      if(stagesItemsArray[index - 1]) {
        stagesItemsArray[index - 1].classList.add(STAGES_ITEM_NEARBY_CLASS);
      }

      if(stagesItemsArray[index + 1]) {
        stagesItemsArray[index + 1].classList.add(STAGES_ITEM_NEARBY_CLASS);
      }      
    }
  })
});
