'use strict';
const playerData = {
  name: 'プレイヤー',
  hp: 100,
  maxHp: 100,
  attack: 5,
  defense: 2,
};

const enemiesData = [
  {
    name: 'スライム',
    hp: 50,
    maxHp: 50,
    attack: 3,
    defense: 1,
  },
  {
    name: 'フェアリー',
    hp: 70,
    maxHp: 70,
    attack: 3,
    defense: 1,
  },
  {
    name: 'ガーゴイル',
    hp: 50,
    maxHp: 50,
    attack: 5,
    defense: 1,
  },
];

let enemyDataArrayNumber = Math.floor(Math.random() * enemiesData.length);
let enemyData = enemiesData[enemyDataArrayNumber];
let clear = false;

let logIndex = 0;
//現在討伐数
let nowKilledNumber = 0;
// 目標討伐数
let targetKilledNumber = 2;

const playerName = `<span style="color: red;">${playerData['name']}</span>`;
const enemyName = `<span style="color: blue;">${enemyData['name']}</span>`;

const initState = (victoryOrDefeat) => {
  // 共通stateをセット
  // 現在討伐数と目標討伐数をセット
  insertText('nowKilledNumber', nowKilledNumber);
  insertText('targetKillNumber', targetKilledNumber);
  // モンスター側
  insertText('maxEnemyHp', enemyData['maxHp']);
  insertText('enemyName', enemyData['name']);
  // プレイヤー側
  insertText('maxPlayerHp', playerData['maxHp']);
  insertText('playerName', playerData['name']);
  switch (victoryOrDefeat) {
    case victory:
      //勝ったときのモンスター側のstateをセット
      enemyData['hp'] = enemyData['maxHp'];
      insertText('currentEnemyHp', enemyData['maxHp']);
      getElementsFromid('currentEnemyHpValue').style.width = '100%';
      break;
    case defeat:
      //負けたときのプレイヤー側のstateをセット
      playerData['hp'] = playerData['maxHp'];
      insertText('currentPlayerHp', playerData['maxHp']);
      getElementsFromid('currentPlayerHpValue').style.width = '100%';
      break;
    default:
      // 初回読み込み時のプレイヤー、モンスターのstateをセット
      insertText('currentEnemyHp', enemyData['maxHp']);
      insertText('currentPlayerHp', playerData['maxHp']);
      break;
  }
  victory = false;
};

const getElementsFromid = (element) => {
  return document.getElementById(element);
};

const insertText = (id, text) => {
  return (getElementsFromid(id).innerText = text);
};

const showModal = (victoryOrDefeatOrclear) => {
  getElementsFromid('mask').classList.add('active');
  getElementsFromid('modal').classList.add('active');
  switch (victoryOrDefeatOrclear) {
    case clear:
      getElementsFromid('modalNextButton').classList.add('hidden');
      getElementsFromid('modalTitle').textContent = 'おめでとう！！ゲームクリア！！';
      break;
    case victory:
      getElementsFromid('modalTitle').textContent = `${enemyData['name']}を倒した！`;
      break;
    case defeat:
      getElementsFromid('modalNextButton').classList.add('hidden');
      getElementsFromid('modalTitle').textContent = `${enemyData['name']}に負けた...`;
      break;
  }
};

const hiddenModal = () => {
  getElementsFromid('mask').classList.remove('active');
  getElementsFromid('modal').classList.remove('active');
  if (victory) {
    getElementsFromid('modalTitle').textContent = `${enemyData['name']}を倒した！`;
  } else if (defeat) {
    getElementsFromid('modalNextButton').classList.add('hidden');
    getElementsFromid('modalTitle').textContent = `${enemyData['name']}に負けた...`;
  }
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

const criticalHitRate = 0.25;
let victory = false;
let defeat = false;
let playerDamage = damageCalculation(playerData['attack'], enemyData['defense']);
let enemyDamage = damageCalculation(enemyData['attack'], playerData['defense']);
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
    victory = true;
    enemyData['hp'] = 0;
    insertText('currentEnemyHp', enemyData['hp']);
    getElementsFromid('currentEnemyHpValue').style.width = '0%';
    showModal(victory);
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
      defeat = true;
      playerData['hp'] = 0;
      insertText('currentPlayerHp', playerData['hp']);
      getElementsFromid('currentPlayerHpValue').style.width = '0%';
      showModal(defeat);
    }
  }

  if (victory) {
    nowKilledNumber++;
    insertText('nowKilledNumber', nowKilledNumber);
    if (nowKilledNumber === targetKilledNumber) {
      clear = true;
      showModal(clear);
    }
  }
});

getElementsFromid('modalNextButton').addEventListener('click', () => {
  hiddenModal();
  enemyDataArrayNumber = Math.floor(Math.random() * enemiesData.length);
  enemyData = enemiesData[enemyDataArrayNumber];
  initState(victory);
});