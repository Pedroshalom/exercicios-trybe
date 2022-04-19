const numbers = [1, 2, 3];
numbers.push(4);// lembrando .push para adicionar elementos

console.log(numbers); // [1, 2, 3, 4]

//Spread Operator:

//- É um recurso do ES6 que nos permite espalhar os valores de um objeto iterável,
//  como um array, em um novo objeto. Dessa forma, apenas copiamos 
//  as informações do array original e colamos em outro lugar.

//EX1:.(com arrays).

const bairros = ['Pajuçara', 'Santarém', 'soledade II'];
const ruas = ['Shalom', 'Moema', 'Garoupa'];

const grupos = [...bairros, ...ruas];

console.log(grupos);

//Ex:.2(com objetos).

const pessoa = {
    nome: 'André',
    idade: '21',
    cidade: 'PB'
}

const habilidades = {
    sofftSkills: true,
    hardSkills: true,
    backEnd: false,
    trabalho: 'caixa'//pode-se acrescentar
}

const aprendizadoDaPessoa = {
    ...pessoa, ...habilidades
}
console.log(aprendizadoDaPessoa);

//Ex:.(númerico)

const numeros = ['1', '2', '3'];
const novoNumero = [...numeros, '4', '5', '6'];

console.log(numeros);
console.log(novoNumero);

//Ex:.(combinação em única extrutura).

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const meses = [...summer, ...fall, ...winter, ...spring];
console.log(meses); 

//E você pode aplicar esse conceito em funções prontas do Javascript que recebem 
//múltiplos parâmetros, como as funções Math.max e Math.min . Vamos ver um exemplo?

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers));// O math.max retorna o maior numero
console.log(Math.min(...randomNumbers)); // O math.min retorna o menor numero


const furtasEspeciais = ['Maçã', 'Banana', 'Mamão'];
const frutasAadicionar = ['Abacaxi', 'Laranja'];

const saladaDeFrutas = [...furtasEspeciais, ...frutasAadicionar];

console.log(saladaDeFrutas);

