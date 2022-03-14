const openModalBtn = document.querySelector('.slide-3__btn');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal__btn');

openModalBtn.addEventListener('click', function(){
  modal.style = 'display:block';
});

closeModalBtn.addEventListener('click', function() {
  modal.style = 'display:none';
});
