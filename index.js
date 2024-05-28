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

console.log(filtrarAdultos(pessoas));

/////////////////  Exercício 3 //////////////////////////
/*Dado um array de objetos representando produtos com propriedades categoria e preco, crie uma 
função que agrupe os produtos por categoria e calcule o preço total de cada categoria.

function agruparPorCategoria(produtos) {
// Sua implementação aqui
}

let produtos = [
{ categoria: 'eletrônicos', preco: 99.99 },
{ categoria: 'livros', preco: 19.99 },
{ categoria: 'eletrônicos', preco: 199.99 },
{ categoria: 'livros', preco: 29.99 },
{ categoria: 'roupas', preco: 49.99 }
];
console.log(agruparPorCategoria(produtos));
/
{
eletrônicos: 299.98,
livros: 49.98,
roupas: 49.99
}
\/ */
function agruparPorCategoria(produtos) {
  return produtos.reduce((acumulador, produto) => {
    if (!acumulador[produto.categoria]) {
      acumulador[produto.categoria] = 0;
    }
    acumulador[produto.categoria] += produto.preco;
    return acumulador;
  }, {});
}

let produtos = [
  { categoria: 'eletrônicos', preco: 99.99 },
  { categoria: 'livros', preco: 19.99 },
  { categoria: 'eletrônicos', preco: 199.99 },
  { categoria: 'livros', preco: 29.99 },
  { categoria: 'roupas', preco: 49.99 },
];

console.log(agruparPorCategoria(produtos));
