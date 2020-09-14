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
