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
