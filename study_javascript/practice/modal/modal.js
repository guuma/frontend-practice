'use strict';
const getElementbyId = (element) => {
  return document.getElementById(element);
};

getElementbyId('modalOpen').addEventListener('click', () => {
  getElementbyId('modal').classList.add('active');
  getElementbyId('mask').classList.add('active');
});

getElementbyId('modalClose').addEventListener('click', () => {
  getElementbyId('modal').classList.remove('active');
  getElementbyId('mask').classList.remove('active');
});

const parentMenu = document.querySelectorAll('.menu>li>a');

for (let i = 0; i < parentMenu.length; i++) {
  parentMenu[i].addEventListener('click', (e) => {
    e.preventDefault();
    parentMenu[i].classList.toggle('active');
    parentMenu[i].nextElementSibling.classList.toggle('active');
  });
}