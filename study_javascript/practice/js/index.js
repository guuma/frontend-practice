const testElement = document.getElementById('test');
const x = 5;
const y = 10;
const weather = ['sunny', 'cloudy', 'rain'];
weather.push('snow');
// testElement.innerText = 'The weather today is ' + weather[3];

for (let num = 0; num < 5; num++) {
  console.log(num + ' numのだよ');
  for (let i = 0; i < weather.length; i++) {
    console.log(i + ' weatherのだよ');
    console.log(num + '回目の ' + 'The weather today is' + weather[i]);
  }
}

// for (let i = 0; i < weather.length; i++) {
//   let listElement = document.createElement('li');
//   listElement.innerText = 'The weather today is ' + weather[i];
//   const element = document.getElementById('number');
//   element.appendChild(listElement);
// }

const tax = 1.1;
const applePrice = 120;

const apple = document.getElementById('apple');
apple.innerText = applePrice * tax;


testElement.addEventListener('click', () => {
  const listElement = document.querySelectorAll('.list li');
  console.log(listElement);
  for (let i = 0; i < listElement.length; i++) {
    console.log(listElement[i]);
    listElement[i].classList.toggle('test');
  }
});

// 0~1未満の数値をランダムに生成する
// randomNumber * 5がとりうる最大値は4.99999..なので5未満の数値がランダムに生成される;
const randomNumber = Math.random();

testElement.addEventListener('click', () => {
  testElement.classList.toggle('active');
  const omikuji = ['大吉', '中吉', '小吉', '凶', '大凶']
  const omikujiItem = omikuji[Math.floor(Math.random() * omikuji.length)]
  testElement.textContent = `本日の運勢は${omikujiItem}です`
});
