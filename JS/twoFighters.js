// INSTRUCTION

// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Example:
// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }

// SOLUTION

function declareWinner(fighter1, fighter2, firstAttacker) {

    let attacker, defender, temp
    
    fighter1.name == firstAttacker ? attacker = fighter1 : attacker = fighter2 
    fighter2.name == firstAttacker ? defender = fighter1 : defender = fighter2 
    
    while (defender.health > 0) {
      defender.health -= attacker.damagePerAttack
      temp = attacker 
      attacker = defender 
      defender = temp 
    } 
    
    return attacker.toString()
}