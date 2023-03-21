function* generate() {
  yield `Valor 1`;
  yield `Valor 2`;
  yield `Valor 3`;
}

const g1 = generate();

// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next());
// console.log(g1.next());

function* generate2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

const g2 = generate2();
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)

function* generate3() {
  yield 0;
  yield 1;
  yield 2;
}

function* generate4() {
  yield* generate3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = generate4();
// for (let valor of g4) {
//   console.log(valor);
// }

function* generate5() {
  yield function () {
    console.log(`Vim do y1`);
  };
  yield function () {
    console.log(`Vim do y2`);
  };
}

const g5 = generate5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();
