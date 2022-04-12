// //GABARITO DE EXEMPLO: HOFS

// const techProducts = [
//     {
//       id: 1, // numérico
//       name: 'computer', // string
//       price: 350, // number
//     },
//     {
//       id: 2,
//       name: 'mouse',
//       price: 350,
//     },
//     {
//       id: 3,
//       name: 'monitor',
//       price: 589,
//     },
//     {
//       id: 4,
//       name: 'keyboard',
//       price: 78,
//     },
//     {
//       id: 5,
//       name: 'HD',
//       price: 350,
//     },
//     {
//       id: 6,
//       name: 'webcam',
//       price: 187,
//     },
//     {
//       id: 7,
//       name: 'mic',
//       price: 69,
//     },
//     {
//       id: 8,
//       name: 'headset',
//       price: 216,
//     },
//   ];
//   /*
//   * 1 - // Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares
//   * 2 - // Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário
//   * 3 - // Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total
//   // ex: id: 8 e quantidade: 2 preço total: 432
//   * 4 - // Crie um algoritmo que dado um preço retorne todos os produtos com preços iguais ao passado como parametro pra função.
//   ​
//   */
//   ​
//   const arrayProdPares = (arrayProdutos) => {
//     const arrayResultado = [];
//     arrayProdutos.forEach(produto => {
//       if (produto.id % 2 === 0) {
//         arrayResultado.push(produto.name)
//       }
//     })
//     return arrayResultado;
//   }
//   ​
//   // console.log(arrayProdPares(techProducts))
//   ​
//   const over300 = (arrayProdutos) => arrayProdutos.some(produtos => produtos.price > 300)
//   ​
//   // console.log(over300(techProducts))
//   ​
//   const totalPrice = (arrayProdutos, id, qtd) => {
//     const idAchado = arrayProdutos.find(produto => produto.id === id);
//     const precoTotal = idAchado.price * qtd;
//     return `A quantidade escolhida foi ${qtd} e preco foi de ${precoTotal}`
//   };
//   ​
//   console.log(totalPrice(techProducts, 8, 2));
//   ​
//   const filterProduct = (arrayProdutos, priceProduct) => {
//     const pricesEqual = arrayProdutos.filter(produtos => produtos.price === priceProduct);
//     return pricesEqual;
//   }
//   ​
//   console.log(filterProduct(techProducts, 350))


// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.filter(verifyEven);

// console.log(isEven); // [ 30, 22 ]

// // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.filter((number) => number % 2 === 0);

// console.log(isEven2); // [ 30, 22 ]


// const number = [17, 19, 30, 2, 44, 22, 14];

// const verificaEven = (number) => number % 2 === 0;

// const éEven = number.filter(verificaEven);

// console.log(éEven); // retorna os numeros pares do array.
// //---------------------------//------------------------------------//
// const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const removeStudentByName = (name, listofStudents) =>
//   listofStudents.filter((student) => student !== name);
//   // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

// const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
// console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]

// //Veja a diferença entre fazer uma mesma função 
// //usando for e em seguida usando map:

// const persons = [
//     { firstName: 'Maria', lastName: 'Ferreira' },
//     { firstName: 'João', lastName: 'Silva' },
//     { firstName: 'Antonio', lastName: 'Cabral' },
//   ];
  
//   const fullNames = [];
  
//   for (let index = 0; index < persons.length; index += 1) {
//     fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
//   }
  
//   console.log(fullNames);

//   //Agora com a função map:

//   const persons2 = [
//     { firstName: 'Maria', lastName: 'Ferreira' },
//     { firstName: 'João', lastName: 'Silva' },
//     { firstName: 'Antonio', lastName: 'Cabral' },
//   ];
  
//   const fullNames2 = persons.map((person2) => `${person2.firstName} ${person2.lastName}`);
  
//   console.log(fullNames2); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

// const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

// const prices = [2.99, 3.99, 1.5, 2];

// const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
//   { [product]: listPrices[index] }
// ));

// const listProducts = updateProducts(products, prices);
// console.log(listProducts);
// // => [
// //   { Arroz: 2.99 },
// //   { Feijao: 3.99 },
// //   { Alface: 1.5 },
// //   { Tomate: 2 },
// // ]



// const allNameStudents = estudantes.filter((estudante) => (
//     estudante.turno === 'Manhã')).map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);
  
//   console.log(allNameStudents);

//   //------------------//---------------------//------------------------//--------

//   //Array.reduce:

// const numbers1 = [32, 15, 3, 2, -5, 56, 10];

// const sumNumbers = numbers1.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
// console.log(sumNumbers); // 113

// // Ou seja:

// const getSum = (result, number) => result + number;
// const sumNumbers1 = numbers1.reduce(getSum);
// console.log(sumNumbers); // 113

// const collection = [1, 2, 3, 4, 5];

// const getSum = (accumulator, number) => {
//   console.log(accumulator); // 1 3 6 10
//   return accumulator + number;
// };

// const sumNumbers = collection.reduce(getSum);
// console.log(sumNumbers); // 15

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers); // 113

// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// function flatten() {
//   // escreva seu código aqui
//   return arrays.reduce((acc, curr) => acc.concat(curr), []);
// }
