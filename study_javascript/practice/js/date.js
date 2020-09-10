const today = new Date();
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth() + 1);
console.log(today.getDate());
console.log(today.getHours());

const outputDate = (date) => {
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  let outputText = `「${date.getFullYear()}」年`;
  outputText += `${date.getMonth() + 1}月`;
  outputText += `${date.getDate()}日`;
  outputText += `${days[today.getDay()]}曜日`;
  outputText += `${date.getHours()}時`;
  outputText += `${date.getMinutes()}分`;
  outputText += `${date.getSeconds()}秒`;
  outputText += `${date.getMilliseconds()}ミリ秒です`;
  return outputText;
};

document.getElementById('date').textContent = `今は${outputDate(today)}`;
const targetDate = new Date(2021, 7 - 1, 23);
// Matn.floorは切り下げ、Math.ceilは切り上げ、今回の場合 '残り1日(オリンピック前日)' は0.123...のような値になるので切り上げて残り1日としている
// 逆に当日は、0未満になるので、切り上げても値は0となり' '残り0日'と表示される
console.log((targetDate - today) / (1000 * 60 * 60 * 24));
const count = Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24));
document.getElementById('countDown').textContent = `東京オリンピックまで残り${count}日です！！`;

today.setDate(today.getDate() + 1);
document.getElementById('tomorrow').textContent = `明日の今は${outputDate(today)}`;
