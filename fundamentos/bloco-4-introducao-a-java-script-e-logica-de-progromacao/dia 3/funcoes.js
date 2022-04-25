// function soma(numero1, numero2) {
// let resultado = numero1 + numero2;
// return resultado;
// }

// soma(2, 4);

let statusCarro = 'Desligado';

function ligarCarro() {
    if(statusCarro === 'ligado'){
        statusCarro = 'ligado'
    }else{
        statusCarro = 'Desligado'
    }
    return statusCarro;

}
console.log(statusCarro)


let nome = 'Pedro';

function bomDiaTryber(nome) {
    return 'Bom dia, ' + nome;
  }

  console.log(bomDiaTryber(nome));
  
  function bomDia() {
    return 'Bom dia!';
  }
  
  console.log(bomDia()); // Bom dia!

  //Crie uma função que recebe como parâmetros dois números inteiros
  //e retorne a soma dos dois.

  function soma(number1, number2) {
      return number1 + number2
  }
  console.log(soma(5, 3));

  //Crie uma função que recebe dois números inteiros 
  //e retorne o menor valor entre eles.

  function menorQue(n1, n2) {
      if(n1 < n2) {
          return n1
      }
          return n2
      }
  console.log(menorQue(1, 4));

  