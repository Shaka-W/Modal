const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
  modal.classList.toggle('open-modal');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('open-modal');
});