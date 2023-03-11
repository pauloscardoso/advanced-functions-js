function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(callback) {
  console.log('entrou na função 1')
  setTimeout(() => {
    console.log("executou a f1");
    if(callback) callback();
  }, rand());
}
function f2(callback) {
  console.log('entrou na função 2')
  setTimeout(() => {
    console.log("executou a f2");
    if(callback) callback();
  }, rand());
}
function f3(callback) {
  console.log('entrou na função 3')
  setTimeout(() => {
    console.log("executou a f3");
    if(callback) callback();
  }, rand());
}

// f1(() => f2(() => f3(() => console.log("Olá, mundo!")))) // callback HELL
f1(f1Callback)

function f1Callback(){
  f2(f2Callback)
}

function f2Callback(){
  f3(f3Callback)
}

function f3Callback(){
  console.log('Olá, mundo!')
}


