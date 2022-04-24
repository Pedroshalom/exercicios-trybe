// Array:

let variavel = 'valor'; //exemplo de variável seimples

let pizzas = ['Calabresa', 'F.catupiry', 'Bolonhesa', 'Chocolate', 'Palmito'];
// pizzas[5] = 'Mista';// adicionando mais um item pelo indice/chave.
pizzas.push('Mista'); //adicionando mais um item pelo indice/chave.
console.log(pizzas.length); //para saber o tamanho do array usa o .length
console.log(pizzas.sort()); //para organizar usa o .sorte
console.log(pizzas[3]); //mostrar um unico elemento usa o [] que mostra pelo indece/chave
console.log('Menu de sabores: ' + pizzas); //Exemplo de variável composta com arrays.

// Exercícios de array:

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);// quer saber o tamanho da minha lista.

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask); //acessando as informações

let searchForLastTask = tasksList[tasksList.length -1];// o -1 siginifica acessar o ultimo elemento.
console.log(searchForLastTask);

//Exercício 1:

//Obtenha o valor "Serviços" do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//Exercício 2:

//Procure o índice do valor "Portfólio" do array menu :

let menu1 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu1.indexOf('Portfólio');

console.log(indexOfPortfolio);

// Exercício 3:

// Adicione o valor "Contato" no final do array menu :

let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu2.push('Contato');
console.log(menu2);