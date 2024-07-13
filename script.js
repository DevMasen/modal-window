'use strict';

//* HTML Elements
let modals = document.querySelectorAll('.modal');

let home = document.querySelector('.home');

let aboutme = document.querySelector('.aboutme');

let links = document.querySelector('.links');

let btnList = document.querySelectorAll('.show-modal');

let closeBtns = document.querySelectorAll('.close-modal');

let overlay = document.querySelector('.overlay');

const closeModal = function () {
  //   modal.classList.add('hidden');
  modals.forEach(modal => {
    if (!modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
    }
  });
  overlay.classList.add('hidden');
};
const openHome = function () {
  home.classList.remove('hidden');
  openOverlay();
};
const openAboutme = function () {
  aboutme.classList.remove('hidden');
  openOverlay();
};
const openLinks = function () {
  links.classList.remove('hidden');
  openOverlay();
};
function openOverlay() {
  overlay.classList.remove('hidden');
}

//* Add Functionality to Buttons
btnList.forEach(btn => {
  if (btn.textContent === 'Home') {
    btn.addEventListener('click', openHome);
  } else if (btn.textContent === 'About Me') {
    btn.addEventListener('click', openAboutme);
  } else if (btn.textContent === 'Useful Links') {
    btn.addEventListener('click', openLinks);
  }
});

//* Handle Close Button and Overlay Click
closeBtns.forEach(btn => {
  btn.addEventListener('click', closeModal);
});
overlay.addEventListener('click', closeModal);

//* Add Escape Key Event
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
