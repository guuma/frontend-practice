const getElementbyId = (element) => {
  return document.getElementById(element);
};

document.addEventListener('DOMContentLoaded', () => {
  getElementbyId('menuButton').addEventListener('click', () => {
    getElementbyId('menuButton').classList.toggle('active');
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