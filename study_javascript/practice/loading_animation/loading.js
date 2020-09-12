const getElement = document.getElementById('loading');

window.addEventListener('load', () => {
  setTimeout(() => {
    getElement.classList.remove('active');  
  }, 3000);
});
