//2.Para o segundo exercício, some todos os valores 
//contidos no array e imprima o resultado;

let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers1.length; index += 1) {
  result += numbers1[index];
}

console.log(result);
