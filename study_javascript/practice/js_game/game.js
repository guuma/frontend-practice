'use strict';
const playerData = {
  name: 'プレイヤー',
  hp: 100,
  attack: 5,
  defense: 2,
};

const enemyData = {
  name: 'スライム',
  hp: 50,
  attack: 7,
  defense: 1,
};

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

const getElementsByid = (element) => {
  return document.getElementById(element);
};

const insertText = (id, text) => {
  return (getElementsByid(id).innerText = text);
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

window.onload = initState();

getElementsByid('attack').addEventListener('click', () => {
  let endGame = false;
  const playerDamage = damageCalculation(playerData['attack'], enemyData['defense']);
  const enemyDamage = damageCalculation(enemyData['attack'], playerData['defense']);
  enemyData['hp'] -= playerDamage;
  insertText('currentEnemyHp', enemyData['hp']);

  playerData['hp'] -= enemyDamage;
  insertText('currentPlayerHp', playerData['hp']);

  getElementsByid('currentEnemyHpValue').style.width = `${
    (enemyData['hp'] / enemyData['maxHp']) * 100
  }%`;
  getElementsByid('currentPlayerHpValue').style.width = `${
    (playerData['hp'] / playerData['maxHp']) * 100
  }%`;

  if (enemyData['hp'] <= 0) {
    alert('勝利');
    endGame = true;
    enemyData['hp'] = 0;
    insertText('currentEnemyHp', enemyData['hp']);
    getElementsByid('currentEnemyHpValue').style.width = '0%';
  } else if (playerData['hp'] <= 0) {
    alert('敗北');
    endGame = true;
    playerData['hp'] = 0;
    insertText('currentPlayerHp', playerData['hp']);
    getElementsByid('currentPlayerHpValue').style.width = '0%';
  }

  if (endGame) {
    getElementsByid('attack').classList.add('deactive');
    getElementsByid('currentEnemyHpValue').style.width = '100%';
    getElementsByid('currentPlayerHpValue').style.width = '100%';
    initState();
    getElementsByid('attack').classList.remove('deactive');
    console.log(enemyData['hp']);
  }
});
