// criação de um vetor
// let lista = [5,10,15,20]

// console.log(lista);

//verificar o tamanho da lista
// console.log(lista.length);
//verificar o ultimo valor da lista
// console.log(lista.at(-1))

// lista[5] = true
// lista[4] = 123
// console.log(lista);

// let vetorstring = [
//   "Boxer",
//   "Pastor Alemão",
//   "Pinscher",
//   "Husky Siberiano",
//   "Corgi"
// ];


// for (let contador = 0; contador < vetorstring.length; contador++) {
//   console.log(contador  +'º raça de cão: ' + vetorstring[contador]);
// }

// Crie uma lista que receba 10 numero do usuario
// 1 criar a lista vazia ok
// receber 10 numeros ok
// os 10 numeros vem do usuario ok

/**
 * Elabore um algoritmo que leia 10 números inteiros e armazene em um vetor (ok). Em seguida, mostre na tela:
Todos os elementos dos índices ímpares do vetor (ok)
Todos os elementos do vetor que são números pares (if valor % 2 === 0 mostra na tela) (ok)
A Soma de todos os elementos do vetor (ok)
A Média de todos os elementos do vetor, armazenada em uma variável do tipo real
 */

let lista = []
const leia = require('readline-sync')
let soma = 0

for (let contador = 0; contador < 10; contador++) {
  lista[contador] = leia.questionInt('Manda um numero ai meu consagrado: ')
  soma = soma + lista[contador]
}
console.log(`a soma da lista é ${soma}`);
console.log('a média dos valores é: ' + (soma/10));
// mostrar os numeros nos indices impares
for(let contador = 1; contador < 10; contador+=2) {
  console.log(`O numero ${lista[contador]} está no indice ${contador}`);
}

//mostrar apenas os numeros pares
for(let contador = 0; contador < 10; contador++) {
  if(lista[contador] % 2 === 0){
    console.log(`o numero ${lista[contador]} é par`);
  }
}


// let array_nomes = ["Samantha", "Amanda", "Vinicius", "Cauê", "Leonardo"];
// console.log(array_nomes);
// console.log(array_nomes.sort().reverse());


// let vetorNumeros = [10, 15, 5, 70, 140];
// console.log(vetorNumeros);

// function compareAsc(a, b) {
//   return a - b;
// }

// console.log(vetorNumeros.sort());