const obj = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: function () {
    console.log('Hello!! World');
  },
  prop4: {
    prop5: 'value5',
  },
};

document.getElementById('openMenu').addEventListener('click', () => {
  const menus = document.getElementById('menus');
  menus.classList.toggle('active');
});

const animationTargetElements = document.querySelectorAll('.textAnimation');
for (let i = 0; i < animationTargetElements.length; i++) {
  const targetElement = animationTargetElements[i];
  const texts = targetElement.textContent;
  const textsArray = [];
  targetElement.textContent = '';
  for (let j = 0; j < texts.split('').length; j++) {
    const text_split = texts.split('')[j];
    if (text_split === ' ') {
      textsArray.push(' ');
    } else {
      textsArray.push('<span style="animation-delay: ' + (j * .05) + 's;">' + text_split + '</span>');
    }
  }
  for (let k = 0; k < textsArray.length; k++) {
    // console.log(textsArray);
    targetElement.innerHTML += textsArray[k];
  }
}
// document.getElementById('button').addEventListener('click', (e) => {
//   e.preventDefault();
//   document.getElementById('box').classList.add('active');
// });

// const box = document.getElementById('box');
// const box_list = box.classList;
// console.log(box_list);
