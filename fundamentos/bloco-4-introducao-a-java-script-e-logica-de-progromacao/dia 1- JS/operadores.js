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

const currentHour = 8;

//2.Crie uma variável chamada "message" que, inicialmente, é uma string vazia.

let message = '';

//3.Implemente condicionais para que:
//Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
//Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
//Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
//Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
//Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".

if(currentHour >= 22) {
    message = 'Não deveriamos comer nada, é hora de dormir'
}

else if(currentHour >= 18 && currentHour < 22) {
    message = 'Rango da noite, vamos jantar.'
}
else if(currentHour >= 14 && currentHour < 18) {
    message = 'Vamos fazer um bolo pro café da tarde?'
}
else if(currentHour >= 11 && currentHour < 14) {
    message = 'Hora do almoço!!'
}
else if(currentHour >= 4 && currentHour < 11) {
    message = 'Humm, cheiro de café recém passado!!'
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
let weekDay = 'Quarta-feira';

//2.Implemente condicionais para que:
//Se nossa variável "weekDay" for "segunda-feira", "terça-feira", 
//"quarta-feira", "quinta-feira" ou "sexta-feira", imprima 
//"Oba, mais um dia de aprendizado na Trybe >:D".
//Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".

if(weekDay === 'Segunda-feira' || weekDay === 'Terça-feira', 
weekDay === 'Quarta-feira' || weekDay === 'Quinta-feira' || weekDay === 'Sexta-feira') {
console.log('Oba, mais um dia de aprendizado na Trybe')
}
else{
    console.log('FINALMENTE, descanso merecido UwU!')
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

// let pessoaCandidata = 'Natal-RN'
//2.Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens
//do exercício anterior se o estado da pessoa candidata for 'aprovada' , 
//'lista' ou 'reprovada'. Como default , imprima a mensagem de 'não se aplica' 


// switch(pessoaCandidata) {
//     case 'Natal-RN':
//         console.log('Aprovado');
//         break;
// }
let andrezaEpedro = 'familia'
switch(andrezaEpedro) {
    case 'familia':
        console.log('Maju');
        break;
}
//         default:
//         console.log('Não se aplica');
// }
//     case 'Bahia':
//         console.log('Lista');
//         break;

//     case 'João Pessoa':
//       console.log('Reprovado');
//         break;

//         default:
//         console.log('Não se aplica');
// }
