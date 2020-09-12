const getElementbyId = (element) => {
  return document.getElementById(element);
};

// アロー関数を使った場合、thisをbindするのでグローバルオブジェクトを参照している
document.addEventListener('DOMContentLoaded', () => {
  // windowオブジェクトを返す
  console.log(this);
  getElementbyId('menuButton').addEventListener('click', () => {
    // windowオブジェクトを返す
    console.log(this);
    getElementbyId('menuButton').classList.toggle('test');
  });
});

// アロー関数は使っていないので,thisはbindされずにthisは実行時のレシーバであるオブジェクトを参照する
// document.addEventListener('DOMContentLoaded', function() {
//   // documentオブジェクトを返す
//   console.log(this);
//   getElementbyId('menuButton').addEventListener('click', function() {
//     // document.getElementById('menuButton')を返す;
//     console.log(this);
//   });
// });