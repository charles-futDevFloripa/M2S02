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
