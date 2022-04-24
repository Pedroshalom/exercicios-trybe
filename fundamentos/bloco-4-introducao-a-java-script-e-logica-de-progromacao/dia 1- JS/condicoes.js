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

const notaPessoaCandidata = 80;

// //2.Implemente uma lógica que verifique se a pessoa candidata foi aprovada, 
// //reprovada ou se ela está na lista de espera. Para isso, 
// //considere as seguintes informações:

// // * Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
// // * Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
// // * Se a nota for menor que 60, imprima "Você foi reprovada(o)"
if(notaPessoaCandidata <= 80) {
    console.log('Parabéns você foi aprovado!');
}

else if(notaPessoaCandidata > 80 && notaPessoaCandidata <= 60) {
    console.log('Você está na lista de espera');
}

else{
    console.log('Você foi reprovado!');
}

//3.Crie uma estrutura condicional utilizando o if , else if e else 
//para criar o seu algoritmo, e os operadores lógicos 
//que se aplicam a cada situação.

let campeãoBrasileiro = 85;

if (campeãoBrasileiro >= 82) {
    console.log('Flamengo campeão');
}

else if (campeãoBrasileiro < 80 && campeãoBrasileiro <= 60 ) {
    console.log('vice campeão');
}

else {
    console.log('você foi rebaixado');
}

// 4. Altere o valor da nota para verificar 
// se as condições que você implementou funcionam;