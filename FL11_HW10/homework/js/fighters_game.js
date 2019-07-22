function Fighter(objFighterProp) {
  let wins = 0;
  let losses = 0;
  this.getName = function() {
    return objFighterProp.name;
  }
  this.getDamage = function() {
    return objFighterProp.damage;
  }
  this.getAgility = function() {
    return objFighterProp.agility;
  }
  this.getHealth = function() {
    return objFighterProp.hp;
  }
  let totalHp = this.getHealth();
  this.attack = function(defender) {
    let absoluteSuccess = 100;
    let randomLimit = 101;
    if (absoluteSuccess - defender.getAgility() >= Math.floor(Math.random() * randomLimit)) {
      defender.dealDamage(this.getDamage());
      console.log(`${this.getName()} make ${this.getDamage()} damage to ${defender.getName()}`);
    } else {
      console.log(`${this.getName()} attack missed`);
    }
  }
  this.logCombatHistory = function() {
    console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${losses}`);
  }
  this.heal = function (healthPoints) {
    let currentHp = objFighterProp.hp + healthPoints;
    if (currentHp <= totalHp) {
      objFighterProp.hp = currentHp;
      return objFighterProp.hp;
    } else {
      objFighterProp.hp = totalHp;
      return objFighterProp.hp;
    }
  }
  this.dealDamage = function(points) {
    objFighterProp.hp -= points;
    if (objFighterProp.hp < 0) {
      objFighterProp.hp = 0;
    }
    return objFighterProp.hp
  }
  this.addWin = function() {
    wins += 1;
    return wins;
  }
  this.addLoss = function() {
    losses += 1;
    return losses;
  }
}
function battle (firstFighter, secondFighter) {
  function fighterIsDead (currentFighter) {
    console.log(`${currentFighter} is dead and can't fight`);
  }
  if (!firstFighter.getHealth()) {
    return fighterIsDead(firstFighter.getName());
  }
  if (!secondFighter.getHealth()) {
    return fighterIsDead(secondFighter.getName());
  }
  while (firstFighter.getHealth() !== 0 && secondFighter.getHealth() !== 0) {
    firstFighter.attack(secondFighter);
    secondFighter.attack(firstFighter);
  }
  if (firstFighter.getHealth() === 0) {
    firstFighter.addLoss();
    secondFighter.addWin();
  } else {
    secondFighter.addLoss();
    firstFighter.addWin();
  }
}
