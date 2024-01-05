function toggleMenu() {
	var menuToggle = document.querySelector('.menu-toggle');
	menuToggle.classList.toggle('open-menu');
}

const popup = document.querySelector('.backdrop');
const popupBtnOpen = document.querySelectorAll('.popup-btn-open');
const popupBtnClose = document.querySelector('.popup-btn-close');

function openpopupeMenu() {
    popup.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
  }
  
  function closepopupeMenu() {
    popup.classList.add('is-hidden');
    document.body.style.overflow = '';
  }

popupBtnOpen.forEach(btn => {
    btn.addEventListener('click', openpopupeMenu);
});
popupBtnClose.addEventListener('click', closepopupeMenu);