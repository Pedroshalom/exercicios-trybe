setTimeout(() => {
    console.log('Comprar parafusos') // Comprar parafusos
    console.log('Adicionar ao estoque') // Adicionar ao estoque
}, 2000);

console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers);

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers); // O retorno é [2, 3]

const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers), 3000);

// Declaramos nossa variável de despesas
const despesas = [
    {
        gym: 99,
    },
    {
        ifood: 200,
    },
    {
        phone: 60,
    },
    {
        internet: 100,
    },
];

// Declaramos nossa renda
const renda = 1000;

const despesaMensal = (renda, despesas, callback) => {
    // Definimos que a despesa total é igual ao valor retornado pela função callback (que é o parâmetro da nossa função)
    // que vai receber nosso parâmetro/variável "despesas"
    const despesaTotal = callback(despesas);
    // Definimos nosso saldo final, que é nossa renda - nossa despesa total
    const saldoFinal = renda - despesaTotal;

    console.log(`Balanço do mês:
  Recebido: R$${renda},00
  Gasto: R$${despesaTotal},00
  Saldo: R$${saldoFinal},00 `);
};

// Definimos nossa função que será passada como parâmetro
// essa função recebe o parâmetro despesas a partir da função principal despesaMensal
const somaDespesas = (despesas) => {
    // Separamos cada item do nosso array de despesas
    // e fazemos um reduce para somar os valores
    const custoItem = despesas.map((item) => Object.values(item));
    const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
    return despesaTotal;
};

// acc é a sigla para accumulator (acumulador)
// curr é a sigla para current (valor atual)

// Executamos a função principal com as variáveis renda, despesas
// e a nossa função somaDespesas
// callback = somaDespesas
despesaMensal(renda, despesas, somaDespesas);

// Balanço do mês:
// Recebido: R$1000,00
// Gasto: R$459,00
// Saldo: R$541,00


// primeira forma
// const resultadoFinal = (resultado) => {
//     console.log(resultado);
// }

// const funcSoma = (n1, n2) => n1 + n2;


// let resultadoSoma = funcSoma(10,8);
// resultadoFinal(resultadoSoma);

// //segunda forma
// const resultadoFinal = (resultado) => {
//     console.log(resultado);
// }

// const funcSoma = (n1, n2) => { 
//     let soma = n1 + n2;   
//     resultadoFinal(soma); 
// }
// funcSoma(10, 8); 

//terceira forma

const resultadoFinal = (resultado) => {
    console.log(resultado);
}

const funcSoma = (n1, n2, callback) => { 
    let soma = n1 + n2;   
    callback(soma); 
}
funcSoma(10, 8, resultadoFinal); 

// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const getUser = (callback) => {
//   const userToReturn = {
//     firstName: "Pedro",
//     lastName: "Santos",
//     nationality: "Brasileiro"
//   };
//   // Insira o retorno da função `getUser`
//   return callback(userToReturn);
// };

// console.log(getUser(userFullName)); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
// console.log(getUser(userNationality)); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = callback => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian"
    };
    console.log(callback(user));
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo