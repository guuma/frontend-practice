const headerModule = (() => {
  let counter = 0;

  return {
    countUp: () => {
      counter += 1;
      console.log("現在のカウントは", counter);
    },
    selectMenu: () => {
      console.log("ヘッダーのメニューが選択されました");
    },
  };
})();


// (async() => {
//   const url = 'https://api.github.com/users/'

//   const json = await fetch(url)
//       .then(res => {
//         return res.json()
//       }).catch(error => {
//         return null
//       });

//       console.log(json.login)
// })();

