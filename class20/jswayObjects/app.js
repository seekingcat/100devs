const aurora = {
  name: 'Aurora',
  health: 150,
  strength: 25,
  xp: 0,

  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
  },
};

aurora.health -= 20;
aurora.strength += 10;
aurora.xp += 15;

console.log(aurora.describe());

// modelling a dog

const dog = {
  name: 'Fido',
  species: 'mutt',
  size: 'medium',
  bark() {
    return 'Woof';
  },
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// modelling a circle

const r = Number(prompt('Enter the circle radius:'));

const circle = {
  circumference() {
    return 2 * Math.PI * r;
  },

  area() {
    return Math.PI * r * r;
  },
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

// modelling a bank account

const account = {
  name: 'Alex',
  balance: 0,
  credit(amt) {
    return (this.balance += amt);
  },
  describe() {
    return `owner: ${this.name}, balance ${this.balance}`;
  },
};

console.log(account.describe());
account.credit(250);
account.credit(-80);
console.log(account.describe());
