//Parâmetros e/ou Argumentos

function func(valor) {
  console.log(valor);
}
func("valor");

//Só funciona usando a palavra function. Não funciona com arrow function
function func1() {
  let total = 0;
  for (let arg of arguments) {
    total += arg;
  }
  console.log(total);
}
func1(1, 2, 3, 4, 5, 6, 7);

const func2 = (a) => {
  console.log(a.slice(-1));
};
func2([1, 2, 3, 4, 5, 6, 7]);

//Argumentos que sustenta todos os argumentos enviados
function func3(a, b) {
  b = b || 0;
  console.log(a + b);
}
func3(2);

function func4(a, b = 0) {
  console.log(a + b);
}
func4(2);

function func4(a, b = 2, c = 4) {
  console.log(a + b + c);
}
func4(2, undefined, 20);

//Desestruturação
function func5({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
const obj = { nome: "Paulo", sobrenome: "Cardoso", idade: 20 };
func5(obj);

function func6([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}
const array = [1, 2, 3];
func6(array);

function conta(operador, acumulador, ...numeros) {
  console.log(operador, acumulador, numeros);
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }
  console.log(acumulador);
}
conta("+", 0, 20, 30, 40, 50);

function conta1(operador, acumulador, ...numeros) {
  console.log(arguments);
}
conta1("+", 1, 20, 30, 40, 50);

const conta2 = (operador, acumulador, ...numeros) => {
  console.log(operador, acumulador, numeros);
  // console.log(arguments); //não tem arguments em arrow function
};
conta2("+", 1, 20, 30, 40, 50);

const conta3 = (...args) => {
  console.log(args);
};
conta3("+", 1, 20, 30, 40, 50);
