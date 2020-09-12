window.addEventListener('scroll', () => {
  let scroll = document.documentElement.scrollTop;
  document.getElementById('scrollValue').innerText = scroll;
  if (scroll > 300) {
    document.querySelector('main').classList.add('test');
  } else {
    document.querySelector('main').classList.remove('test');
  }
});

console.log('通常通り表示されるよ！！');
setTimeout(() => {
  console.log('5秒遅れて表示されるよ！！');
}, 5000);

const getElements = (element) => {
  return document.getElementById(element);
};

getElements('test').addEventListener('click', () => {
  setTimeout(() => {
    getElements('contents').classList.toggle('active');
  }, 1000);
});

let elapsedTime = 0;
getElements('time').textContent = elapsedTime;
const timerId = setInterval(() => {
  // elapsedTime++ === elapsedTime += 1
  elapsedTime++;
  getElements('time').textContent = `${elapsedTime}秒経過しました！！`;
  if (elapsedTime === 5) {
    clearInterval(timerId);
  }
}, 1000);
