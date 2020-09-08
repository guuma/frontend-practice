const testElement = document.getElementById('test');
const x = 5;
const y = 10;
testElement.innerText = x + y;

const tax = 1.1;
const applePrice = 120;

const apple = document.getElementById('apple');
apple.innerText = applePrice * tax;

testElement.addEventListener('click', () => {
  testElement.innerText = "テストがクリックされました"
});
