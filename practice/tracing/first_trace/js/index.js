const targetElement = document.querySelectorAll('.animation-target');
document.addEventListener("scroll", () => {
  for (let i = 0; i < targetElement.length; i++) {
    const targetElementHeight = targetElement[i].clientHeight * .6
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElementHeight;
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
})