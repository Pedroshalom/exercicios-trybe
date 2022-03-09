// exercícios da T-21-B

// // exercício 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 50 é: X.

let sum = 0;

for(let count = 0; count <= 50; count = count + 1){
  sum += count;
}

console.log('A soma total de 1 a 50 é: ' + sum);

//exercício 2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// so a quantidade seja igual a 50, exiba uma mensagem secreta.

let counter = 0;
for(let index = 2; index <= 150; index += 1) {
    if(index % 3 === 0) {
        counter += 1;
    }
}
if(counter === 50) {
    console.log('secret Message!');
}

//exercicio 3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let person1 = 'scissors';
let person2 = 'stone'; 

if (person1 == 'paper' && person2 == 'stone'){
  console.log('Player 1 won');
} else if (person1 == 'stone' && person2 == 'scissors'){
  console.log('Player 1 won');
} else if (person1 == 'scissors' && person2 == 'paper'){
  console.log('Player 1 won');
} else if (person1 == person2){
  console.log('A Ties');
} else{
  console.log('Player 2 won');
}


//exercicio 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".

let age = 20;
let category;


if (age >= 18) {
  category = 'maior de idade';
} else {
  category = 'menor de idade';
};
console.log('A pessoa é ' + category);

// exercicio 5. Crie um algoritmo que recebe a idade de Manu, Ana e Ronald e imprime quem é a mais nova no formato:
// "Pessoa" é a mais nova.

let ageCarolzita = 18;
let ageMurilo = 16;
let ageBaêta = 19;

if(ageCarolzita < ageMurilo && ageCarolzita < ageBaêta){
  console.log('Carolzita é a mais nova')
}
else if (ageMurilo < ageCarolzita && ageMurilo < ageBaêta){
  console.log('Murilo é o mais novo')
} 
else {
  console.log('Baêta é é o mais novo')
} 

// exercícios de algoritimos
// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);

// 3- Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);






