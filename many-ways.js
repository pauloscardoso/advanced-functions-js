//Declaração de Função (hoisting)
falaOi();
function falaOi() {
  console.log("Oie");
}

// First-class objects
//Function expression
const souUmDado = function () {
  console.log("Sou um dado");
};
souUmDado();

//arrow function
const arrowFunction = () => {
  console.log("Sou uma arrow function");
};
arrowFunction();

//Dentro do objeto
const obj = {
  falar: () => {
    console.log("Estou falando");
  },
};
