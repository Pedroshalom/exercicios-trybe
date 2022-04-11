//3.1 Para o terceiro exercício, calcule e imprima a média aritmética 
// dos valores contidos no array;
// A média aritmética é o resultado da soma de todos 
// os elementos divido pelo número total de elementos.

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers2.length; index += 1) {
    sum += numbers2[index];
}

let resultado = sum / numbers2.length;

console.log(resultado);