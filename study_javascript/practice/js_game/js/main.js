'use strict';
const playerData = {
  name: 'プレイヤー',
  hp: 100,
  attack: 5,
  defense: 2,
};

const enemiesData = [
  {
    name: 'スライム',
    hp: 50,
    attack: 3,
    defense: 1,
  },
  {
    name: 'フェアリー',
    hp: 70,
    attack: 3,
    defense: 1,
  },
  {
    name: 'ガーゴイル',
    hp: 100,
    attack: 3,
    defense: 1,
  },
];

const enemyDataArrayNumber = Math.floor(Math.random() * enemiesData.length);
const enemyData = enemiesData[enemyDataArrayNumber];
playerData['maxHp'] = playerData['hp'];
enemyData['maxHp'] = enemyData['hp'];

const initState = () => {
  insertText('currentEnemyHp', enemyData['maxHp']);
  insertText('enemyName', enemyData['name']);
  insertText('maxEnemyHp', enemyData['maxHp']);
  insertText('playerName', playerData['name']);
  insertText('currentPlayerHp', playerData['maxHp']);
  insertText('maxPlayerHp', playerData['maxHp']);
  enemyData['hp'] = enemyData['maxHp'];
  playerData['hp'] = playerData['maxHp'];
};

const getElementsFromid = (element) => {
  return document.getElementById(element);
};

const insertText = (id, text) => {
  return (getElementsFromid(id).innerText = text);
};

const damageCalculation = (attack, defense) => {
  const damageRange = 0.1;
  const maxDamage = attack * (1 + damageRange),
    minDamage = attack * (1 - damageRange),
    attackDamage = Math.floor(Math.random() * (maxDamage - minDamage) + minDamage);
  const damage = attackDamage - defense;
  if (damage < 1) {
    return 0;
  } else {
    return damage;
  }
};

let logIndex = 0;
const insertLogs = (playerOrEnemy, criticalText) => {
  //undifinedはfalseを返すので、criticalTextが呼び出し元で与えられて無いときは''が入る
  const critical_Text = criticalText ? criticalText : '';
  const logText = (playerOrEnemy) => {
    if (playerOrEnemy === 'player') {
      const plyaerAttackisZero = playerDamage <= 0;
      const playerLogs = plyaerAttackisZero
        ? `${playerName}の攻撃！ダメージを与えられなかった`
        : `${playerName}の攻撃！${critical_Text}${enemyName}に${playerDamage}のダメージ！`;
      return playerLogs;
    } else if (playerOrEnemy === 'enemy') {
      const enemyAttackisZero = enemyDamage <= 0;
      const enemyLogs = enemyAttackisZero
        ? `${enemyName}の攻撃！ダメージを与えられなかった`
        : `${enemyName}の攻撃！${critical_Text}${playerName}に${enemyDamage}のダメージ！`;
      return enemyLogs;
    }
  };
  const logsElement = getElementsFromid('logs');
  const createLog = document.createElement('li');
  const logs = playerOrEnemy === 'player' ? logText('player') : logText('enemy');
  createLog.innerHTML = `${logIndex++}. ${logs}`;
  logsElement.insertBefore(createLog, logsElement.firstChild);
};

let victory = false;
let defeat = false;
let playerDamage = damageCalculation(playerData['attack'], enemyData['defense']);
let enemyDamage = damageCalculation(enemyData['attack'], playerData['defense']);

const criticalHitRate = 0.25;

const playerName = `<span style="color: red;">${playerData['name']}</span>`;
const enemyName = `<span style="color: blue;">${enemyData['name']}</span>`;

window.onload = initState();

getElementsFromid('attack').addEventListener('click', () => {
  // プレイヤー側からモンスターに対しての処理
  if (Math.random() < criticalHitRate) {
    playerDamage = damageCalculation(playerData['attack'], enemyData['defense']);
    console.log('playerDamage before', playerDamage);
    playerDamage *= 2;
    insertLogs('player', 'クリティカルヒット');
    console.log('playerDamage after', playerDamage);
  } else {
    insertLogs('player');
  }
  enemyData['hp'] -= playerDamage;
  insertText('currentEnemyHp', enemyData['hp']);
  getElementsFromid('currentEnemyHpValue').style.width = `${
    (enemyData['hp'] / enemyData['maxHp']) * 100
  }%`;

  if (enemyData['hp'] <= 0) {
    alert('勝利');
    victory = true;
    enemyData['hp'] = 0;
    insertText('currentEnemyHp', enemyData['hp']);
    getElementsFromid('currentEnemyHpValue').style.width = '0%';
  }

  // モンスター側からプレイヤーに対しての処理
  if (!victory) {
    if (Math.random() < criticalHitRate) {
      enemyDamage = damageCalculation(enemyData['attack'], playerData['defense']);
      console.log('enemyDamage before', enemyDamage);
      enemyDamage *= 2;
      insertLogs('enemy', 'クリティカルヒット');
      console.log('enemyDamage after', enemyDamage);
    } else {
      insertLogs('enemy');
    }
    playerData['hp'] -= enemyDamage;
    insertText('currentPlayerHp', playerData['hp']);
    getElementsFromid('currentPlayerHpValue').style.width = `${
      (playerData['hp'] / playerData['maxHp']) * 100
    }%`;

    if (playerData['hp'] <= 0) {
      alert('敗北');
      defeat = true;
      playerData['hp'] = 0;
      insertText('currentPlayerHp', playerData['hp']);
      getElementsFromid('currentPlayerHpValue').style.width = '0%';
    }
  }

  if (victory || defeat) {
    getElementsFromid('attack').classList.add('deactive');
    // getElementsFromid('currentEnemyHpValue').style.width = '100%';
    // getElementsFromid('currentPlayerHpValue').style.width = '100%';
    // initState();
    // getElementsFromid('attack').classList.remove('deactive');
  }
});