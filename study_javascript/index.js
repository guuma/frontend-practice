// let myObj = {
//   id: 2,
//   printId(){
//     console.log(this.id);
//   }
// }

// // myObj.printId();

// const sayFoo = function() {
//   console.log(this['foo']);
// }

// foo = 'foo';

// const mySecondObj = {
//   foo: "I'm in the obj",
//   sayFoo
// }

// // mySecondObj.sayFoo()

// function MyObj(id) {
//   this.id = id;
// }

// MyObj.prototype.printId = function(id) {
//   console.log(this.id);
// }
// const newInstance = new MyObj(5);

// class MyClass {
//   constructor(id) {
//     this.id = id;
//   }

//   printId(){
//     console.log(this.id);
//   }
// }
// const newInstance = new MyObj(5);

// function isTweetable(text) {
//   return text.length <= 140;
// }

// const isTweetable = function(text) {
//   return text.length <= 140;
// }
// function alertTweetable(text) {
//   if (isTweetable(text)) {
//     alert("Tweetできますよ！！")
//   }
// };

// console.log(alertTweetable("Hello"))

// function bring(food) {
//   // if ( 手洗いが終えたら){
//     // 食材を持ってきてもらう処理
//   // }
// }

// function peer(food) {
//   // if ( 手洗いが終えたら){
//     // 食材の皮をむいてもらう処理
//   // }
// }

// function cut(food) {
//   // if ( 手洗いが終えたら){
//     // 食材を切ってもらう処理
//   // }
// }

// // 高階関数を使った場合の処理
// function washed(fn) {
//   if (手洗いを終えたら) {
//     fn(); // コールバック関数の処理
//   }
// }

// function bring(food) {
//   // 食材を持ってきてもらう処理
// }
// function peer(food) {
//   // 食材の皮をむく処理
// }
// function cut(food) {
//   // 食材を切る処理
// }

// const unfollow = function() {
//   console.log("フォローを外しました");
// }

// const cancelTweet = function() {
//   console.log("ツイートをキャンセルしました");
// }

// function confirmed(fn) {
//   if(window.confirm("実行しますか？")) {
//     fn();
//   }
// }

// confirmed(unfollow);

// function confirmed(fn) {
//   const input = window.prompt("実行しますか?");
//   fn(input)
// }

// confirmed(function(input) {
//   if (input === "実行") {
//     console.log("リポジトリを削除")
//   }
// });

// const btn = document.getElementById("button");

// btn.addEventListener("click", function() {
//   console.log("フォローを解除");
// })

// const foods = ["にんじん", "じゃがいも","玉ねぎ"];

// foods.forEach(function(food) {
//   console.log(food)
// })

// async function callApi() {
//   // 実際にAPIを叩く処理
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();
//   console.log(users)
// }

// function callApi() {
//   fetch("https://jsonplaceholder.typicode.com/users").then(function(res) {
//   return res.json();
//   })
//   .then(function (users) {
//     console.log(users);
//   })
// }

// callApi();

// const button = document.getElementById("addBtn");
// const lists = document.getElementById("lists");

// button.addEventListener("click", async function() {
//   // データのやりとり
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();
//   console.log(users);

//   // DOM操作
//   users.forEach( function(user) {
//     console.log(user)
//   });
//   // const list = document.createElement("li");
//   // list.innerText = "foo";
//   // lists.appendChild(list);
//   // console.log(list);
// });

// //DOMを取得
// const button = document.getElementById("addBtn");
// const lists = document.getElementById("lists");

// async function getUsers() {
//   // データのやりとり
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();
//   return users;
// }

// async function usersList() {
//   const users = await getUsers();

//   // DOM操作
//   users.forEach(addList);
// }

// function addList(user) {
//   const list = document.createElement("li");
//   list.innerText = user.name;
//   lists.appendChild(list);
// }

// window.addEventListener("load", usersList);
// // clickイベントを追加
// button.addEventListener("click", usersList)

// function Friday() {
//   return new Promise(function(resolve, reject){
//     const today = "Friday";
//     return resolve(today);
//   });
// }

// Friday().then(function(resolve_value) {
//   console.log('i like' + resolve_value);
// });

// let mutableText = "let変更前"
// mutableText = "let変更後"
// console.log(mutableText);

// // const immutableText = "const変更前"

// const mutableArray = [1, 2, 3];
// mutableArray.push(4);
// console.log(mutableArray);

// const mutableObject = {id: 'hoge', value: 'huga'}
// mutableObject['name'] = 'bar'
// console.log(mutableObject);

// function namedFunc(message) {
//   console.log (message)
// }

// const arrowFunc = (message) => {
//   console.log(message)
// }

// const oneLineArrowFunc = (message) => console.log(message);

// const users = {
//   hoge: 'hogehoge'
// }
// const getUsername = (userId) => users[userId]
// const userName = getUsername('hoge')

// namedFunc('これは名前付き関数です')
// arrowFunc('これはアロー関数です')
// oneLineArrowFunc('これは一行で書いたアロー関数です')
// console.log(userName)

// const objectArray = [
//   { id: "hoge", text: "fuga"},
//   { id: "foo", text: "bar"},
//   { id: "fiz", text: "buzz"}
// ];

// const index = objectArray.findIndex(object => {
//   return object.id === "hoge"
// })

// console.log(index, objectArray[index]);

// const regex = RegExp('tora*')

// // console.log("Is tora~ ?", regex.test("torahack"))
// // console.log("Is tora~ ?", regex.test("charahack"))
// // console.log("Is chara~ ?", /chara*/.test("charahack"))

// const isTora = regex.test("torahack")

// if (isTora) {
//   console.log("私はトラハックです。")
// } else {
//   console.log("私はトラハックではありません")
// }

// 初期化
// const arr = Array(10000000).fill(0).map((v, i) => i);
// let sum = 0 | 0;

// // #1 for
// for (let j = 0; j < 5; j++) {
//   sum = 0;
//   console.time('for');
//   for (let i = 0; i < length; i++) {
//     sum += arr[i];
//   }
//   console.timeEnd('for');
//   console.log(sum);
// }

// // #2 for of
// for (let i = 0; i < 5; i++) {
//   sum = 0;
//   console.time('for of');
//   for (const v of arr) {
//     sum += v;
//   }
//   console.timeEnd('for of');
//   console.log(sum);
// }

// // #3-1 forEach(arrow)
// for (let i = 0; i < 5; i++) {
//   sum = 0 | 0;
//   console.time('forEach(arrow');
//   arr.forEach(v => {
//     sum += v;
//   });
//   console.timeEnd('forEach(arrow');
//   console.log(sum);
// }

// // #3-2 forEach(pre-defined function)
// function addSum(v) {
//   sum += v;
// }
// for (let i = 0; i < 5; i++) {
//   sum = 0 | 0;
//   console.time('forEach(function)');
//   arr.forEach(addSum);
//   console.timeEnd('forEach(function)');
//   console.log(sum);
// }

// // #4-1 map(arrow)
// for (let i = 0; i < 5; i++) {
//   sum = 0 | 0;
//   console.time('map(function)');
//   arr.map(v => sum += v);
//   console.timeEnd('map(function)');
//   console.log(sum);
// }

// // #4-2 map(pre-defined function)
// for (let i = 0; i < 5; i++) {
//   sum = 0 | 0;
//   console.time('map(funtion)');
//   arr.map(addSum);
//   console.timeEnd('map(function)');
//   console.log(sum);
// }

// // #5-1 reduce(arrow)
// for (let i = 0; i <5; i++) {
//   sum = 0 | 0;
//   console.time('map(arrow)');
//   sum = arr.reduce((sum, v) => sum + v, 0 | 0);
//   console.timeEnd('reduce(arrow)');
//   console.log(sum);
// }

// // #5-2 reduce(pre-defined function)
// function reduceSum(sum, v) {
//   return sum + v;
// }
// for (let i = 0; i < 5; i++) {
//   sum = 0 | 0;
//   console.time('reduce(function)');
//   sum = arr.reduce(reduceSum);
//   console.timeEnd('reduce(function)');
//   console.log(sum)
// }

// var pokemon = "ライチュウ"
// function sing() {
//   console.log(pokemon);
//   var pokemon = "ピカチュウ";
//   console.log(pokemon);
// };
// sing()

// let data = {};
// write = function(key, val) {
//   data[key] = val;
//   return data[key]
// }

// write('message', 'Welcome to ES6');

// var items = document.querySelectorAll('li');
// for(var i = 0;i < 5; i++) {
//   var li = items[i];
//   li.addEventListener('click',function() {
//     alert(li.textContent + ':' + i);
//   })
// }

// const getDomElementModule = (() => {

//   return {
//     getId: (id) => {
//       const element = document.getElementById(id)
//       console.log(element.innerText)
//     },
//     getClasses: (className) => {
//       const classes = document.getElementsByClassName(className)
//       console.log(classes)
//       for (const classNode of classes) {
//         console.log(classNode.innerText)
//       }
//     },
//     submitForm: () => {
//       const forms = document.forms.demoForm

//       //  値を取得したいinput要素のnameを指定
//       const title = forms.title.value
//       const description = forms.description.value

//       // CheckBoxのうち、選択されている値を取得
//       const checkedLanguages = []
//       for (const language of forms.languages) {
//         if (language.checked) {
//           checkedLanguages.push(language.value)
//         }
//       }
//       console.log(
//         "タイトル: "  + title,
//         "説明: " + description,
//         "言語: " + checkedLanguages
//       )
//     }
//   }
// })();

// const headerModule = (() => {
//   let counter = 0;

//   return {
//     countUp: () => {
//       counter += 1
//       console.log("現在のカウントは", counter)
//     },
//     selectMenu: () => {
//       console.log("ヘッダーのメニュー！")
//     }
//   }
// })();

// let counter = 1;
// const element = document.getElementsById(id)
// element.insertAdjacentHTML(
//   'beforeend',
//   `<div>${counter}つ目の子要素だよ</div>`
// )

// counter++

// const setDomElementModule = (() => {
//   let counter = 1;
//   return {
//     setInnerText: (id) => {
//       const element = document.getElementById(id)
//       console.log(element.innerText)
//       element.innerText = 'fugaに書き換えられたよ'
//       console.log(element.innerText)
//     },
//     setInnerHtml: (id) => {
//       const element = document.getElementById(id)
//       const literal = '書き換えられたよ！'
//       console.log(element.innerHTML)
//       element.innerHTML = `<p id="child">HTMLごと${literal}</p>`
//       console.log(element.innerHTML)
//     },
//     replaceImageSrc: (id) => {
//       const element = document.getElementById(id)
//       element.setAttribute('src', 'https://drive.google.com/uc?export=view&id=1E8jqnNgvDPqtqZ3wH6-QuoOmPN8xjwP8')
//     },
//     appendChildNode: (id) => {
//       const element = document.getElementById(id)
//       element.insertAdjacentHTML(
//         'afterbegin',
//         `<div>${counter}つ目の子要素だよ</div>`
//       )
//       counter++
//     }
//   }
// })();

// const uploadImageModule = () => {
//   const inputElement = document.getElementById("image");
//   const previewElement = document.getElementById("image-preview");

//   inputElement.addEventListener("change", (event) => {
//     event.preventDefault(); //デフォルトのイベントのキャンセル
//     event.stopPropagation(); // イベントのバブリングを防ぐ

//     // type="file"を指定されたinput要素のchangeイベントは「ファイルのリスト」を返す
//     const file = event.target.file[0];
//     console.log(file);

//     // ファイルが存在しないか、ファイル形式が"image/*ではないとき"
//     if (!file || !file.type.match(/image\/*/)) {
//       alert("画像ファイルではありません");
//       return false;
//     }

//     // FireReaderのインスタンスを生成(ローカルファイルを読み込むオブジェクト)
//     const reader = new FileReader();

//     // FileReaderの読み込みが完了した結果(アップロードした画像ファイルのデータ)を、img要素のsrcにセット
//     reader.addEventListener("load", (event) => {
//       // event.target.resultは、base64エンコードされた画像データ
//       previewElement.setAttribute("src", event.target.result);
//     });

//     // セットされたオブジェクトを読み込む
//     reader.readAsDataURL(file);
//   });
// };

const uploadImageModule = (() => {
  const inputElement = document.getElementById("image");
  const previewElement = document.getElementById("image-preview");

  console.log(inputElement);
  inputElement.addEventListener("change", (event) => {
    event.preventDefault(); // デフォルトイベントのキャンセル
    event.stopPropagation(); // イベントのバブリングを防ぐ
    console.log(inputElement);

    // type="file"を指定されたinput要素のchangeイベントは「ファイルのリスト」を返す
    const file = event.target.files[0];

    // ファイルが存在しないか、ファイル形式が"image/*"ではないとき
    if (!file || !file.type.match(/image\/*/)) {
      alert("画像ファイルではありません。");
      return false;
    }

    // FileReaderのインスタンスを生成（ローカルファイルを読み込むオブジェクト）
    const reader = new FileReader();

    // FileReaderの読み込みが完了した結果（アップロードした画像ファイルのデータ）を、img要素のsrcにセット
    reader.addEventListener("load", (event) => {
      // event.target.resultは、base64エンコードされた画像データ
      previewElement.setAttribute("src", event.target.result);
    });

    // セットされたオブジェクトを読み込む
    reader.readAsDataURL(file);
  });
})();
