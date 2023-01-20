//return
//Retorna um valor
//Termina a função

function soma(a, b) {
  return a + b;
}

const result = soma(1, 2);
console.log(result);

function soma2(a, b) {
  //essa função não retorna nada (falta a palavra RETURN)
  console.log(a + b);
}

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
  };
}

const p1 = criaPessoa("Paulo", "Cardoso");
const p2 = {
  nome: "João",
  sobrenome: "Oliveira",
};
console.log(p1);
console.log(p2);
console.log(typeof p1);
console.log(typeof p2);

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ", " + resto;
  }
  return falaResto;
}

const olaMundo = falaFrase("Olá");
console.log(olaMundo("mundo!"));

// Aplicando
function duplica(n) {
  return n * 2;
}
function triplica(n) {
  return n * 3;
}
function quadruplica(n) {
  return n * 4;
}
console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));

const criaMultiplicador = (multiplicador) => (n) => n * multiplicador;

const quintuplica = criaMultiplicador(5);
const sextuplica = criaMultiplicador(6);
const setuplica = criaMultiplicador(7);
const decuplicar = criaMultiplicador(10);
console.log(quintuplica(2));
console.log(sextuplica(2));
console.log(setuplica(2));
console.log(decuplicar(2));
