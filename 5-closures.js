//Global

// Um fechamento (closure) é a combinação de uma função agrupada (incluída) com referências ao seu estado circundante (o ambiente léxico).
// Em outras palavras, um encerramento fornece acesso ao escopo de uma função externa a partir de uma função interna.
// Em JavaScript, os encerramentos são criados toda vez que uma função é criada, no momento da criação da função.

function retornaFuncao() {
  const nome = "Paulo"; // nome é uma variável local criada por retornaFuncao
  return () => {
    return nome; // usar variável declarada na função pai
  };
}

const funcao = retornaFuncao();
console.log(funcao);
