'use strict';
const getElementbyId = (element) => {
  return document.getElementById(element);
};

// modalWindow
getElementbyId('modalOpen').addEventListener('click', () => {
  getElementbyId('modal').classList.add('active');
  getElementbyId('mask').classList.add('active');
});

getElementbyId('modalClose').addEventListener('click', () => {
  getElementbyId('modal').classList.remove('active');
  getElementbyId('mask').classList.remove('active');
});

// dialog box
const parentMenu = document.querySelectorAll('.menu>li>a');

for (let i = 0; i < parentMenu.length; i++) {
  parentMenu[i].addEventListener('click', (e) => {
    e.preventDefault();
    parentMenu[i].classList.toggle('active');
    parentMenu[i].nextElementSibling.classList.toggle('active');
  });
}

// cahnge tab
const tabs = document.querySelectorAll('.tabs>li>a');
const contents = document.querySelectorAll('.contents>li');
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('mouseover', (e) => {
    e.preventDefault();
    for (let k = 0; k < tabs.length; k++) {
      tabs[k].classList.remove('active');
      contents[k].classList.remove('active');
    }
    tabs[i].classList.toggle('active');
    contents[i].classList.toggle('active');
  });
}
