////////////////////////// EXERCICIO 1 //////////////////////////
/* 
Descrição: Dado um array de números, crie uma função que retorne um novo array, contendo apenas os números pares.

function filtrarPares(numeros) {
// Sua implementação aqui
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filtrarPares(numeros)); // [2, 4, 6, 8, 10]*/
console.log('Exercício 1');
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
console.log('Exercício 2');
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
console.log('Exercício 3');
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

///////////////////////////////// Exercicio 04 ////////////////////////////////////
/*
Crie uma função contador que retorna uma outra função que incrementa um valor interno e retorna o valor atualizado a cada chamada.

function contador() {
// Sua implementação aqui
}

let contador1 = contador();
console.log(contador1()); // 1
console.log(contador1()); // 2
console.log(contador1()); // 3

let contador2 = contador();
console.log(contador2()); // 1
console.log(contador2()); // 2
*/
console.log('Exercício 4');
function contador() {
  let valor = 0;
  return function () {
    valor += 1;
    return valor;
  };
}

let contador1 = contador();
console.log('Contador 1');
console.log(contador1());
console.log(contador1());
console.log(contador1());

console.log('Contador 2');
let contador2 = contador();
console.log(contador2());
console.log(contador2());

///////////////////////////// Exercicio 05 ////////////////////////////////////
/*
Dado um array de números, crie uma função que use reduce para calcular o produto de todos os números no array.

function calcularProduto(numeros) {
// Sua implementação aqui
}

let numeros = [1, 2, 3, 4, 5];
console.log(calcularProduto(numeros)); // 120*/

console.log('Exercício 5');
function calcularProduto(numeros) {
  return numeros.reduce((produto, numero) => produto * numero, 1);
}

let numeros2 = [1, 2, 3, 4, 5];
console.log(calcularProduto(numeros2));

///////////////////////////// Exercicio 06 ////////////////////////////////////

/*
Crie uma função transformarArray, que recebe um array e uma função de transformação e retorna um novo array, onde cada elemento é 
o resultado da aplicação da função de transformação ao elemento correspondente do array original.

function transformarArray(array, transformacao) {
// Sua implementação aqui
}

function dobrar(numero) {
return numero * 2;
}

let numeros = [1, 2, 3, 4, 5];
console.log(transformarArray(numeros, dobrar)); // [2, 4, 6, 8, 10]
*/
console.log('Exercício 6');
function transformarArray(array, transformacao) {
  return array.map(transformacao);
}

function dobrar(numero) {
  return numero * 2;
}

let numeros3 = [1, 2, 3, 4, 5];
console.log(transformarArray(numeros3, dobrar));

///////////////////////////// Exercicio 07 ////////////////////////////////////

/*
Crie uma função compor que recebe duas funções f e g e retorna uma nova função que é a composição de f e g (ou seja, f(g(x))).
function compor(f, g) {
// Sua implementação aqui
}
function somar1(x) {
return x + 1;
}
function multiplicar2(x) {
return x * 2;
}
let funcaoComposta = compor(somar1, multiplicar2);
console.log(funcaoComposta(5)); // 11 (multiplicar2(5) = 10, somar1(10) = 11)
*/

console.log('Exercício 7');
function compor(f, g) {
  return function (x) {
    return f(g(x));
  };
}

function somar1(x) {
  return x + 1;
}

function multiplicar2(x) {
  return x * 2;
}

let funcaoComposta = compor(somar1, multiplicar2);
console.log(funcaoComposta(5));
