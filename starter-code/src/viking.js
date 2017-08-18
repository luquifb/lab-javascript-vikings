// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function() {
    return this.strength;
  };
  this.receiveDamage = function(damage) {
    this.strength -= 50;
  };

};

soldier.attack(soldier.strength);


// Viking
function Viking () {
  Soldier.call(this, health, strength, attack, receiveDamage);
};

Viking.prototype.constructor = Soldier;

viking.attack();


// Saxon
function Saxon () {}

// War
function War () {}
