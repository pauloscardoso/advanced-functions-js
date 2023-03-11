// IIFE -> Immediately Invoked Function Expression

((age, weight, height) => {
  const nome = "a"; //não interfere no global scope
  console.log("Immediately Invoked");
  const lastName = "Cardoso";
  const sayHello = (name) => {
    return `Name: ${name}, lastName: ${lastName}`;
  };
  const sayYourName = (name) => {
    console.log(sayHello("Paulo"));
  };
  sayYourName();
  console.log(`Altura = ${age}, Peso = ${weight}, Altura = ${height}`);
})(29, 75, 1.68);

const nome = "variable global scope1";
const lastName = "variable global scope2";
console.log(nome);
console.log(lastName);
