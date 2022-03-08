// let numeros = [1,2,3,4,5];
// for(let numero of numeros) {
    // console.log(numero) ;
// }

// resultado: 
//1
//2
//3
//4
//5

// let word = 'Hello';
// for (let letter of word) {
//   console.log(letter);
// }
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

// let arrOfNumbers = [10, 20, 30];
// for (let sum of arrOfNumbers) {
//   sum += 1;
//   console.log(sum);
// }
// 11
// 21
// 31
// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// for (let nomes of names){
    // console.log(nomes);
// }
// exercício 1
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index = 0; index < numbers.length; index += 1){
    // console.log (numbers[index]);
// }

// exercício 2
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1){
//     result += numbers[index]
// }
// console.log(result);

// exercício 3
 
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// sun = 0
// for (let index = 0; index < numbers.length; index += 1){
//     sun += numbers[index]
// }
// let average = sun / numbers.length
// console.log(average);

// exercício 4

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   result += numbers[index];
// }

// result = result / numbers.length;

// if (result > 20) {
//   console.log('valor maior que 20');
// } else {
//   console.log('valor menor ou igual a 20');
// }

// exercício 5

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// let higherNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] > higherNumber) {
//     higherNumber = numbers[index];
//   }
// }

// console.log(higherNumber);

// exercício 6

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     result += 1;
//   }
// }

// if (result === 0) {
//   console.log('nenhum valor ímpar encontrado');
// } else {
//   console.log(result);
// }

// exercício 7

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let smallestNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] < smallestNumber) {
//     smallestNumber = numbers[index];
//   }
// }

// console.log(smallestNumber);

// exercício 8

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
  };