// 1.Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)


const a = 10;
const b = 5;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

// Exercício 2
// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, 
// duas constantes com os valores que serão comparados.

const a1 = 20;
const b1 = 15;

if(a1 > b1) {
    console.log("'A1' é maior do que 'B1'");
}else {
    console.log("'B1' é maior do que 'A1'");
}

// Exercício 3
// Faça um programa que retorne o maior de três números. Defina, no começo do programa
// três constantes com os valores que serão comparados.

const numero1 = 10;
const numero2 = 7;
const numero3 = 5;

if(numero1 > numero2 && numero1 > numero3) {
    console.log('o maior numero é  o numero1')
}
else if(numero2 > numero1 && numero2 > numero3) {
    console.log('o maior numero é o numero2')
}else {
    console.log('o maior numero é o numero3')
}

// Exercício 4
// Faça um programa que, dado um valor definido numa constante, retorne "positive" 
// se esse valor for positivo, "negative" se for negativo e "zero", caso contrário.


const number = 4;

if (number > 0) {
  console.log('positive');
} else if (number < 0) {
  console.log('negative');
} else {
  console.log('zero');
};