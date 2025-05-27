//let numero = 9.9; //escopo global

// console.log(`valor antes do if: ${numero}`);

// se numero > 6 "passou de ano"
//se numero entre 5 e 6: recuperação
// se numero menor que 5: reprovou
// if (numero > 10 || numero < 0) {
//   if(numero < 0) {
//     console.log('como assim?');
//   }
//   console.log('digita uma nota válida ai');
//   return
// }

// if (numero >= 9) {
//   caso o if seja verdadeiro, cai aqui
//   console.log(`passou`);
// } else if(numero >= 8) {
//   console.log('recuperação');
// } else {
//   caso o if seja falso, cai aqui
//   console.log('reprovou');
// }

// console.log(`========================`);

// == igualdade simples -> verifica apenas o valor
// === igualdade estrita -> verifica valor e tipo


// Switch Case

// let opcao = 2

// switch (opcao) {
//   case 1:
//     console.log('Você escolheu o numero 1');
//     break
//   case 2:
//     console.log('Você escolheu o numero 2');
//     break
//   case 3:
//     console.log('Você escolheu o numero 3');
//     break
//   default:
//     console.log('Escolha entre 1 e 3');
//     break
// }

// const leia = require('readline-sync')

// let categoria;

// let idade = leia.questionInt("Digite a idade do cliente: ", {limitMessage: 'Idade eh um numero po'});

// if (idade >= 0 && idade <= 12) {
//   categoria = "Criança";
// } else if (idade >= 13 && idade <= 17) {
//   categoria = "Adolescente";
// } else if (idade >= 18 && idade <= 59) {
//   categoria = "Adulto";
// } else if (idade >= 60) {
//   categoria = "Idoso";
// } else {
//   categoria = "Idade inválida";
// }
// switch (true) {
//   case idade >= 0 && idade <= 12:
//     categoria = "Criança"
//     break;
//   case idade >= 13 && idade <= 17:
//     categoria = "Adolescente";
//     break;
//   case idade >= 18 && idade <= 59:
//     categoria = "Adulto";
//     break;
//   case idade >= 60:
//     categoria = "Idoso";
//     break;
//   default:
//     categoria = "Idade inválida";
// }

// console.log(`O Cliente é ${categoria}`);


// IF ternário

(2 < 5) && console.log('é verdade');

(2 > 5) // === if (2 > 5)
? console.log('é maior') // {primeira chave do if}
: console.log('é menor') // else

if (2 > 5) {
  console.log('é maior')
} else {
  console.log('é menor')
}

(2 > 5) 
? console.log('sim, 2 é maior que 5') 
: (2 < 3) 
? console.log('sim 2 é menor que 3') 
: console.log('não rolou')

console.log('**********************');

