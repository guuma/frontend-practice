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
  const omikuji = ['大吉', '中吉', '小吉', '凶', '大凶'];
  const omikujiItem = omikuji[Math.floor(Math.random() * omikuji.length)];
  testElement.textContent = `本日の運勢は${omikujiItem}です`;
});

function output(text) {
  document.getElementById('test').textContent = text;
}

const score = Math.floor(Math.random() * 20);
console.log(score);
if (score < 20 && score > 10) {
  output('スコアは10~20のどれかです！！');
} else if (score === 10) {
  output('スコアは10です！！');
} else {
  output('スコアはそれ以外です！！');
}


const a = 2;
b = 3;

//  等価演算子(数値と文字列を比較するとき、文字列は数値に変換されます)ので以下の式の場合、trueを返す
if (a == '2') {
  console.log('true！！');
}


//  厳密等価演算子(オペランド同士が、型を変換することなく厳密に等しいならば真を返します。)ので、以下の場合、falseを返す
if(a === '2') {
  console.log('表示されない')
}
