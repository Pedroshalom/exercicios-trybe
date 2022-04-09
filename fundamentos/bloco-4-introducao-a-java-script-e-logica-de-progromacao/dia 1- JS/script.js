// let age = 20;  //criando variável(let age) e atribuindo(=) o valor a ela(20)
// let name = 'hulk';

// console.log(age);
// console.log(name);
//OBS: a variaveis do tipo let significa que agente  pode ter valores reatribuido;
//no caso variaveis do tipo const não pode ter valores reatribuido.

//Exercício de prática: (Variáveis)
//1. Crie uma constante chamada myName e 
//atribua a ela o seu nome (Exemplo: Carolina).

// const myName = 'Pedro';

// //2.Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.

// const birthCity = 'Natal';
// birthCity = 'Recife'; //(Exercício do requisito 6.)
// //3.Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.

// let birthYear = '1984';
// birthYear = '2030'; //(Exercício do requisito 5).
// //4.Utilize o console.log() para imprimir as constantes e variáveis que você criou.

// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

// //5.Altere o valor atribuído à variável birthYear para 2030. 
// //Faça um console.log(birthYear) novamente para ver o que acontece!

// //6.Altere o valor atribuído à constante birthCity . 
// //Faça um console.log(birthCity) novamente! 
// //Você saberia explicar por que recebemos uma mensagem de erro? 🤔
// //(o erro é pq variavéis do tipo const não recebe reatribuição!)


// //Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas:
// //(São basicamente dois: os de referência e os de valores;)

// //ex:.

// let movie = 'Avangers'; //tipo string literal ou seja atribuindo o valor a variavel com strings('')
// let score = 10; //tipo number literal ou seja atribuindo valor inteiro para variavel score
// let isValid = 'true'; //tipo bollean ou seja se é verdadeiro ou falso
// let name; //tipo undefined(indefinido)
// let collor = null; //tipo nulo
// console.log(movie);

//númerico

// let salary = 3500;

// console.log(salary + salary);
// console.log(salary - salary);
// console.log(salary * salary);
// console.log(salary / salary);
// console.log(salary ** salary);

//++ (incrementar)
//ex:.
// let salary = 3500;
// salary ++;

// console.log(salary); // acrescenta sempre mais 1 ao valor
//-- (decrementar)
//ex:.
// let salary = 3500;
// salary --;

// console.log(salary); // diminui sempre menos 1 ao valor

// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = { // variável do tipo objeto
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log( typeof patientId);
// console.log( typeof isEnrolled);
// console.log( typeof patientInfo);
// console.log( typeof patientAge);

//Para praticar:

//1.Crie uma costante chamada base e uma variável chamada height 
//e atribua os seus respectivos valores: 5 e 8.

// const base = 5;
// let height = 8;

// //2.Crie uma constante chamada area e atribua a ela o resultado da multiplicação 
// //da base pela altura. Dica: lembre-se de usar sempre o console.log() 
// //para imprimir as variáveis e checar os resultados das operações!

// const area = base * height;

// console.log(area);

// //3.Crie uma constante chamada perimeter 
// //e atribua a ela a soma de todos os lados do retângulo.

// const perimeter = 5+5+8+8;

// console.log(perimeter);

//Condições If e Else:
//(Hora de aprender sobre operadores de atribuição 
//e operadores lógicos . Vamos lá?)

//if - Se
//else - senão

//sintaxe:

// let trybe = 16.43;

// if (trybe >= 14 && trybe < 14.40) {
//     //código 
// console.log('esquenta');
// }

// else if (trybe >= 16.30 && trybe < 17.50 ) {
//     //outra condição
//     console.log('aula ao vivo');
// }

// else {
//     //executa o código
//     console.log('fora dos momentos sincronos');
// }

//Para praticar:

//1.Crie uma constante que receba a nota de uma pessoa candidata em um 
//desafio técnico, e atribua a ela um valor entre 1 e 100;

// const notaPessoaCandidata = 90;

// //2.Implemente uma lógica que verifique se a pessoa candidata foi aprovada, 
// //reprovada ou se ela está na lista de espera. Para isso, 
// //considere as seguintes informações:

// // * Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
// // * Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
// // * Se a nota for menor que 60, imprima "Você foi reprovada(o)"

// if (notaPessoaCandidata >= 80) {
//     console.log('Parabéns, você foi aprovada(o)!');
// }

// else if (notaPessoaCandidata < 80 && notaPessoaCandidata >= 60) {
//     console.log('Você está na nossa lista de espera');
// }

// else {
//     console.log("Você foi reprovada(o)");
// }

//3.Crie uma estrutura condicional utilizando o if , else if e else 
//para criar o seu algoritmo, e os operadores lógicos 
//que se aplicam a cada situação.

// let campeãoBrasileiro = 85;

// if (campeãoBrasileiro >= 82) {
//     console.log('Flamengo campeão');
// }

// else if (campeãoBrasileiro < 80) {
//     console.log('vice campeão');
// }

// else {
//     console.log('você foi rebaixado');
// }


//Operadores lógicos:

//Operador AND:
//Esse operador é binário. O que significa que ele precisa de 
//dois elementos para funcionar corretamente.

//ex:.
//Você está numa padaria e quer comer alguma coisa no café da manhã. 
//Então você diz "Por favor, me vê um cafézinho E um pão na chapa".

// const comida = 'pão na chapa';
// const bebida = 'cafézinho';

// if (bebida === 'cafézinhopao' && comida === 'pão na chapa') {
//   console.log('Muito obrigado pela refeição :)');
// } else {
//   console.log('Acho que houve um engano com meu pedido');
// }

//para fixar:

//1.Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 
//de sua escolha, para representar as horas do dia.

const currentHour = 15;

//2.Crie uma variável chamada "message" que, inicialmente, é uma string vazia.

let message = '';

//3.Implemente condicionais para que:
//Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
//Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
//Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
//Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
//Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".

if (currentHour >= 22) {
    message = 'Não deveríamos comer nada, é hora de dormir';
}
else if (currentHour >= 18 && currentHour < 22) {
    message = 'Rango da noite, vamos jantar :D';
}

else if (currentHour >= 14 && currentHour < 18) {
    message = 'Vamos fazer um bolo pro café da tarde?';
}

else if (currentHour >= 11 && currentHour < 14) {
    message = 'Hora do almoço!!!';
}

else if (currentHour >= 4 && currentHour < 11) {
    message = 'Hmmm, cheiro de café recém passado';
}

console.log(message);

//Operador OR:
const bebidaPrincipal = 'cafezinho'; //cha
const bebidaAlternativa = 'suco de laranja';//suco de manga

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
    console.log("Obrigado por me atender :D")
} else {
    console.log("Ei, eu não pedi isso!");
}

//para fixar:

//1.Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".

let weekDay = 'quarta-feira';

//2.Implemente condicionais para que:
//Se nossa variável "weekDay" for "segunda-feira", "terça-feira", 
//"quarta-feira", "quinta-feira" ou "sexta-feira", imprima 
//"Oba, mais um dia de aprendizado na Trybe >:D".
//Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".

if (weekDay === 'segunda-feira' || weekDay === "terça-feira",
    weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
else {
    console.log("FINALMENTE, descanso merecido UwU");
}

//Operador NOT:(!)

console.log(!(2 + 2) === 4);

const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false

console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

//Switch e Case
//E, no final do conteúdo de hoje, você vai aprender uma 
//outra forma de criarmos estruturas condicionais com o switch/case

let trafficLight = 'Azul';

switch (trafficLight) {
    case 'Vermelho':
        console.log('Pare');
        break;

    case 'Amarelo':
        console.log('Atenção');
        break;

    case 'Verde':
        console.log('Siga');
        break;

        default:
            console.log('Valor não identificado');
}

//com isso usamos o switch-case para condições dentro de J.S.

//para praticar:

//1.Crie uma variável para armazenar o estado da pessoa candidata 
//no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada';

let pessoaCandidata = 'Natal-RN'

//2.Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens
 //do exercício anterior se o estado da pessoa candidata for 'aprovada' , 
 //'lista' ou 'reprovada'. Como default , imprima a mensagem de 'não se aplica' 

 switch (pessoaCandidata) {
     case 'Natal-RN':
         console.log('Aprovada');
         break;
       
         case 'Recife':
         console.log('Lista');
         break;

         case 'Bahia':
         console.log('Reprovada');
         break;

         default:
             console.log('Não se aplica');
 }

 
