const targetElement = document.querySelectorAll('.animationTarget');
document.addEventListener('scroll', () => {
  for (let i = 0; i < targetElement.length; i++) {
    const targetElementHeight = targetElement[i].clientHeight * .6
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElementHeight;
    console.log('画面の高さ', window.innerHeight);
    if(window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
});