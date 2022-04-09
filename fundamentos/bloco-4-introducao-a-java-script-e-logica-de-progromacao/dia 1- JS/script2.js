//Exercícios do bloco 4.1:

//1.Faça cinco programas, um para cada operação aritmética básica. 
//Seu programa deve ter duas constantes, a e b , 
//definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const a = 2;
const b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//2.Faça um programa que retorne o maior de dois números. 
//Defina no começo do programa duas constantes com os valores que serão comparados.

const c = 30;
const d = 10;

if (c > d) {
    console.log('c é maior do que d');
} else {
console.log('d é maior do que c');
}
   
//3.Faça um programa que retorne o maior de três números. 
//Defina no começo do programa três constantes com os valores que serão comparados.


const n1 = 6;
const n2 = 4;
const n3 = 2;

if (n1 > n2 && n1 > n3) {
  console.log('O maior número é: ' + n1 + ' (n1)');
} else if (n2 > n1 && n2 > n3) {
  console.log('O maior número é: ' + n2 + ' (n2)');
} else {
  console.log('O maior número é: ' + n3 + ' (n3)');
};

//4.Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo,
// "negative" se for negativo e "zero" caso contrário.

const valorDefinido = 5;

if (valorDefinido > 0) {;
console.log('positive');
}

else if (valorDefinido < 0) {
    console.log('negativo');
}

else {
    console.log('zero');
}

//5.Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

let anguloA = 65;
let anguloB = 100;
let anguloC = 15;

let somaDosAngulos = anguloA + anguloB + anguloC;
let angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if(angulosPositivos){
    if (somaDosAngulos === 180) {
      console.log(true);
    } else {
      console.log(false);
    };
  } else {
    console.log('Erro: ângulo inválido');
  }

  //6.Escreva um programa que receba o nome de uma peça de xadrez 
  //e retorne os movimentos que ela faz.

// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça
// com letras maiúsculas quanto com letras minúsculas, 
// sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas
//  as letras minúsculas (lower case) .

// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

const chessPiece = 'Cavalo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

//7.Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) 
//em conceitos de A a F. Siga essas regras:

// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a 
// nota passada for menor que 0 ou maior que 100.


const grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}

//8.Escreva um programa que defina três números em 
// constantes e retorne true se pelo menos uma das três for par. 
// Caso contrário, ele retorna false .
// Bonus: use somente um if .


const mostraNumero1 = 1;
const mostraNumero2  = 3;
const mostraNumero3  = 5;

let isEven = true;

if ((mostraNumero1 % 2 === 0 || mostraNumero2 % 2 === 0 || mostraNumero3 % 2 === 0)) {
  isEven = true;
};
console.log(isEven);


//9.Escreva um programa que defina três números em 
// constantes e retorne true se pelo menos uma das três for ímpar. 
// Caso contrário, ele retorna false .
// Bonus: use somente um if .

const f = 2;
const g = 4;
const h = 8;

let numeroÉ = false;

if ((f % 2 !== 0 || g % 2 !== 0 || h % 2 !== 0)) {
    numeroÉ = true;
};
console.log(numeroÉ);

//10.Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)


const costOfProduct = 1;
const saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};
