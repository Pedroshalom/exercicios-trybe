
// //First-Class Functions

// function sum (number1, number2) { //criando a funçao 'sum' com dois parâmetros, N1 e N2.
//     return number1 + number2; //retorno de N1 + N2.
//   }

//   const sumVariable = sum; //declarando uma variável 'sumVariable' e atribuindo o valor 'sum'.

//   console.log(sumVariable); //retorno da função.
// //   //  [Function: sum]

// //Exemplo para entendimento:

// //   function sum (number2, number3) {
// //       return number2 + number3;
// //   }

// //   const sumPedro = sum;

// //   console.log(sumPedro);


// // Passar funções como argumento para outras funções:

// const sayHello = () => {  //declarando a cosntante 'sayHello'
//     return ('hello trybers');  //que retorna a mensagem ' hello trybers'
//   }

//   const printGreeting = (callback) => { //declaro outra constante 'printGreeting' e atribuindo o calor callback
//       console.log(callback());
//   }

//   printGreeting(sayHello); // imprimindo a cosntante sayHello( 'hello trybers').


// //Exemplo para entendimento:
//   //   const sayHi = () => {
// //       return ('oi pessoal');
// //   }
// //       const imprimaSaudacao = (callback) => {
// //           console.log(callback());
// //       }

// //   imprimaSaudacao(sayHi);

//   //Retornar uma função de outra função:

//   const sumFixAmount = (amount) => {
//     return (number) => amount + number;
//   }

//   const initialSum = sumFixAmount(15)
//   console.log(initialSum(5));

//   //Exemplo para entendimento:
// //    const FixedValue = (montante) => {
// //        return (numero) => montante + numero;
// //    }

// //    const somaInicial = FixedValue(10)
// //    console.log(somaInicial(8));


// // Higher Order Functions(HOF)
// //As HOFs são funções que usam outras funções em suas operações, 
// // devendo aceitá-las como parâmetro e/ou retorná-las. 
// // O mais incrível é que você já aplicou este conceito na prática. 
// // Veja este exemplo:

// const button = document.querySelector('#signup-button');

// const registerUser = () => {
//   console.log('Registrado com sucesso!');
// };

// button.addEventListener('click', registerUser);

// //Exemplo para entendimento:

// // const btn = document.querySelector('inscrer-btn');

// // const useOregistro = () => {
// //     console.log('registrado com sucesso');
// // }

// // btn.addEventListener('click', useOregistro );
// //Construímos uma função que simula o registro de uma nova pessoa e 
// // passamos como argumento de uma segunda função.
// // Logo, addEventListener é uma HOF.

// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };

//   repeat(5, console.log);

//Para fixação:

//1 - Crie uma função que retorne a string 'Acordando!!' ;
const wakeUp = () => 'Acordando!!';


//2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
const cofee = () => 'Bora tomar café!!';


//3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
const toSleep = () => 'Partiu, dormir!!';

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função 
// para que imprima no console o resultado da execução das funções que você criou 
// nos exemplos anteriores.

const doingThings = (callback) => {
    const result = callback();
    console.log(result);
};

doingThings(wakeUp);
doingThings(cofee);
doingThings(toSleep);

//Exercícios:

// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } 
// representando uma nova pessoa contratada.
// Passe sua função como parâmetro da HOF newEmployees para criar cada 
// pessoa contratada em seu respectivo id.
// A sua função deve receber como parâmetro o 
// nome completo da pessoa funcionária e a partir dele gerar 
// automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (dadosEmployee) => {
    const employees = {
        id1: dadosEmployee('Pedro Guerra'),  // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: dadosEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: dadosEmployee('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

const dadosEmployee = (nomeCompleto) => {
    let emailFormatado = `${nomeCompleto.replace(' ', '_').toLowerCase()}@trybe.com`;
    return {
        nome: nomeCompleto,
        email: emailFormatado
    }
}

console.log(newEmployees(dadosEmployee));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. 
// Esta HOF irá gerar um número aleatório entre 1 e 5 
// recebendo como parâmetros o número apostado 
// e uma função que checa se o número apostado 
// é igual ao número sorteado. O retorno da sua HOF d
// eve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));



