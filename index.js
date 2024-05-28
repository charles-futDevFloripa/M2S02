////////////////////////// EXERCICIO 1 //////////////////////////
/* 
Descrição: Dado um array de números, crie uma função que retorne um novo array, contendo apenas os números pares.

function filtrarPares(numeros) {
// Sua implementação aqui
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filtrarPares(numeros)); // [2, 4, 6, 8, 10]*/

function filtrarPares(numeros) {
  return numeros.filter((numero) => numero % 2 === 0);
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filtrarPares(numeros));

////////////////////////// EXERCICIO 2 //////////////////////////

/*
Dado um array de objetos representando pessoas com propriedades nome e idade, crie uma função que retorne um array, contendo apenas os nomes das pessoas com idade maior ou igual a 18 anos.

‌

function filtrarAdultos(pessoas) {
// Sua implementação aqui
}

let pessoas = [
{ nome: 'Alice', idade: 17 },
{ nome: 'Bob', idade: 22 },
{ nome: 'Charlie', idade: 16 },
{ nome: 'David', idade: 19 }
];
console.log(filtrarAdultos(pessoas)); // ['Bob', 'David']
*/

function filtrarAdultos(pessoas) {
  return pessoas
    .filter((pessoa) => pessoa.idade >= 18)
    .map((pessoa) => pessoa.nome);
}

let pessoas = [
  { nome: 'Alice', idade: 17 },
  { nome: 'Bob', idade: 22 },
  { nome: 'Charlie', idade: 16 },
  { nome: 'David', idade: 19 },
];

console.log(filtrarAdultos(pessoas)); // ['Bob', 'David']
