// Factory function
console.log("----------------------------------------");
console.log("Factory function:");
function createPerson(name, lastName, h, w) {
  return {
    name,
    lastName,
    say(what) {
      return `${this.name} is ${what}`;
    },
    height: h,
    weight: w,
    imc() {
      const indice = this.weight / this.height ** 2;
      return `${name}' imc: ${indice.toFixed(2)}`;
    },
  };
}

const p1 = createPerson("Paulo", "Cardoso", 1.68, 75);
const p2 = createPerson("Viviane", "Santos", 1.62, 52);
console.log(p1.say("talking about JS"));
console.log(p1.imc());
console.log(p2.say("talking about Science"));
console.log(p2.imc());

//Constructor function
console.log("----------------------------------------");
console.log("Constructor function:");

function createAnotherPerson(name, lastName, h, w) {
  return {
    name,
    lastName,
    // Getter
    get fullName() {
      return `Full name is: ${this.name} ${this.lastName}`;
    },
    // Setter
    set fullName(value) {
      value = value.split(' ');
      this.name = value.shift()
      this.lastName = value.join(' ');
      console.log(`New name: ${value}`)
    },
    say(what) {
      return `${this.name} is ${what}`;
    },
    height: h,
    weight: w,
    // Getter
    get imc() {
      const indice = this.weight / this.height ** 2;
      return `${name} imc is: ${indice.toFixed(2)}`;
    },
  };
}

const p3 = createAnotherPerson("Paulo", "Cardoso", 1.68, 75);
const p4 = createAnotherPerson("Viviane", "Santos", 1.62, 52);
console.log(p3.say("talking about JS"));
console.log(p3.imc);
console.log(p4.say("talking about Science"));
console.log(p4.imc);
console.log(p3.fullName)
console.log(p4.fullName)
// Setter change
p3.fullName = 'João Ricardo'
p4.fullName = 'Maria Franco'
console.log(p3.name)
console.log(p3.lastName)
