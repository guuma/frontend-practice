'use strict';
const playerData = {
  name: 'プレイヤー',
  hp: 50,
  attack: 5,
  defense: 2,
};

const enemyData = {
  name: 'スライム',
  hp: 50,
  attack: 7,
  defense: 1,
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

insertText('currentEnemyHp', enemyData['hp']);
insertText('enemyName', enemyData['name']);
insertText('maxEnemyHp', enemyData['hp']);

insertText('playerName', playerData['name']);
insertText('currentPlayerHp', playerData['hp']);
insertText('maxPlayerHp', playerData['hp']);

getElementsByid('attack').addEventListener('click', () => {
  let endGame = false;
  const playerDamage = damageCalculation(playerData['attack'], enemyData['defense']);
  const enemyDamage = damageCalculation(enemyData['attack'], playerData['defense']);
  // console.log(playerDamage);
  enemyData['hp'] -= playerDamage;
  insertText('currentEnemyHp', enemyData['hp']);
  playerData['hp'] -= enemyDamage;
  insertText('currentPlayerHp', playerData['hp']);
  if (enemyData['hp'] <= 0) {
    alert('勝利');
    endGame = true;
    enemyData['hp'] = 0;
    insertText('currentEnemyHp', enemyData['hp']);
  } else if (playerData['hp'] <= 0) {
    alert('敗北');
    endGame = true;
    playerData['hp'] = 0;
    insertText('currentPlayerHp', playerData['hp']);
  }

  if (endGame) {
    getElementsByid('attack').classList.add('deactive');
  }
});
