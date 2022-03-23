const openModalBtn = document.querySelector('.slide-3__btn');
const modalWithSlider = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal__btn');

openModalBtn.addEventListener('click', () => {
  modalWithSlider.style = 'display:block';
});

closeModalBtn.addEventListener('click', () => {
  modalWithSlider.style = 'display:none';
});
