'use strict';
/* modal class lai querySelector lagayer extract gareko */
const modal = document.querySelector('.modal');
/* overlay class lai querySelector lagayer extract gareko */
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
  btnCloseModal.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
  overlay.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
}
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'esc' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
// document.addEventListener('keydown', function (e) {
//   console.log(e.key);
//   if (e.key === 'esc') {

//   }
// )};

// modal.classList.remove('hidden')
