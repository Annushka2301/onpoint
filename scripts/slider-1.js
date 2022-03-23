const slider = document.querySelector('.slider');
const sliderList = slider.querySelector('.slider__list');
const sliderTrack = slider.querySelector('.slider__track');
const slides = slider.querySelectorAll('.slider__slide');
const home = document.querySelector('.header__btn');
const next = slider.querySelector('.slide-1__btn');
let slideWidth = slides[0].offsetWidth;
let slideIndex = 0;
let posInit = 0;
let posX1 = 0;
let posX2 = 0;
let posY1 = 0;
let posY2 = 0;
let posFinal = 0;
let isSwipe = false;
let isScroll = false;
let allowSwipe = true;
let transition = true;
let nextTrf = 0;
let prevTrf = 0;
const lastTrf = --slides.length * slideWidth;
const posThreshold = slides[0].offsetWidth * 0.35;
const trfRegExp = /([-0-9.]+(?=px))/;
let swipeStartTime;
let swipeEndTime;
const animation = document.querySelectorAll('.slide-2__img');
const modal = document.querySelector('.modal');

function getEvent() {
  return (event.type.search('touch') !== -1) ? event.touches[0] : event;
};

function slide() {
  if (transition) {
    sliderTrack.style.transition = 'transform .5s';
  }
  sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

  if (slideIndex === 1) {
    for (let i = 0; i < animation.length; i++) {
      animation[i].classList.add('appear');
    };
  } else {
    for (let i = 0; i < animation.length; i++) {
      animation[i].classList.remove('appear');
    };
  };

  if (slideIndex !== 2) modal.style = 'display: none';

};

function swipeStart() {
  let evt = getEvent();

  if (allowSwipe) {

    swipeStartTime = Date.now();

    transition = true;

    nextTrf = (slideIndex + 1) * -slideWidth;
    prevTrf = (slideIndex - 1) * -slideWidth;

    posInit = posX1 = evt.clientX;
    posY1 = evt.clientY;

    sliderTrack.style.transition = '';

    document.addEventListener('touchmove', swipeAction);
    document.addEventListener('mousemove', swipeAction);
    document.addEventListener('touchend', swipeEnd);
    document.addEventListener('mouseup', swipeEnd);

    sliderList.classList.remove('grab');
    sliderList.classList.add('grabbing');
  }
};

function swipeAction() {

  let evt = getEvent();

  let style = sliderTrack.style.transform;
  let transform = +style.match(trfRegExp)[0];

  posX2 = posX1 - evt.clientX;
  posX1 = evt.clientX;

  posY2 = posY1 - evt.clientY;
  posY1 = evt.clientY;

  if (!isSwipe && !isScroll) {
    let posY = Math.abs(posY2);
    if (posY > 7 || posX2 === 0) {
      isScroll = true;
      allowSwipe = false;
    } else if (posY < 7) {
      isSwipe = true;
    }
  };

  if (isSwipe) {
    if (slideIndex === 0) {
      if (posInit < posX1) {
        setTransform(transform, 0);
        return;
      } else {
        allowSwipe = true;
      };
    };

    if (slideIndex === --slides.length) {
      if (posInit > posX1) {
        setTransform(transform, lastTrf);
        return;
      } else {
        allowSwipe = true;
      };
    };

    if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
      reachEdge();
      return;
    };

    sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
  };

};

function swipeEnd() {
  posFinal = posInit - posX1;

  isScroll = false;
  isSwipe = false;

  document.removeEventListener('touchmove', swipeAction);
  document.removeEventListener('mousemove', swipeAction);
  document.removeEventListener('touchend', swipeEnd);
  document.removeEventListener('mouseup', swipeEnd);

  sliderList.classList.add('grab');
  sliderList.classList.remove('grabbing');

  if (allowSwipe) {
    swipeEndTime = Date.now();
    if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 300) {
      if (posInit < posX1) {
        slideIndex--;
      } else if (posInit > posX1) {
        slideIndex++;
      }
    }
    if (posInit !== posX1) {
      allowSwipe = false;
      slide();
    } else {
      allowSwipe = true;
    }

  } else {
    allowSwipe = true;
  }
};

function setTransform(transform, comapreTransform) {
  if (transform >= comapreTransform) {
    if (transform > comapreTransform) {
      sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
    }
  }
  allowSwipe = false;
};

function reachEdge() {
  transition = false;
  swipeEnd();
  allowSwipe = true;
};

sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
sliderList.classList.add('grab');

sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
slider.addEventListener('touchstart', swipeStart);
slider.addEventListener('mousedown', swipeStart);

home.addEventListener('click', function() {
  slideIndex = 0;
  slide();
});

next.addEventListener('click', function() {
  slideIndex = 1;
  slide();
});
