(() => {
  const prevBtn = document.querySelector('.modal__prev');
  const nextBtn = document.querySelector('.modal__next');
  const pag1 = document.querySelector('.modal__pag-1');
  const pag2 = document.querySelector('.modal__pag-2');
  const slides = document.querySelectorAll('.modal__slide');
  const activePag = document.querySelector('.active-pag');

  let indexSlide = 1;
  showSlides(indexSlide);

  function nextSlide() {
    showSlides(indexSlide += 1);
  }

  function prevSlide() {
    showSlides(indexSlide -= 1);
  }

  function currentSlide(n) {
    showSlides(indexSlide = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.modal__slide');
    let dots = document.querySelectorAll('.modal__pag');
    if (n > slides.length) {
      indexSlide = 1
    }
    if (n < 1) {
      indexSlide = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace('active', '');
    }
    slides[indexSlide - 1].style.display = 'block';
    dots[indexSlide - 1].className += ' active';
  }

  prevBtn.addEventListener('click', () => {
    if (indexSlide === 1) return;
    prevSlide();
  });
  nextBtn.addEventListener('click', () => {
    if (indexSlide === slides.length) return;
    nextSlide();
  });
  pag1.addEventListener('click', () => {
    currentSlide(1);
  });
  pag2.addEventListener('click', () => {
    currentSlide(2);
  });
})();

