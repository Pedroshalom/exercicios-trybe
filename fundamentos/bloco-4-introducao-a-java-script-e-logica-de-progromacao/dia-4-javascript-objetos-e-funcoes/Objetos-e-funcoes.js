// Objetos;

// exercício para fixar:

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
   medals: { golden: 2, silver: 3 },
  };
  console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

  player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

  console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

  console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

// For/in;

// exercício para fixar:

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge', 
  };
  
  for (let name in names) {
    console.log('Olá, ' + names[name]);
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020,
  };
  
  for (let key in car) { 
      console.log(key + ': ' + car[key]);
  }

//   Exercícios
// Parte 1 - Objetos e For/In

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: ['sim']
};

  
      console.log('bem vinda, ' + info.personagem);

    //   2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

    let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        recorrente: 'sim'
    };
    console.log(info);

    // 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

    let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        recorrente: 'sim'
    }
      for (let properties in info){
        console.log(properties);
        }

        // 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

           let info = {
            personagem: 'Margarida',
            origem: 'Pato Donald',
            nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
            recorrente: 'sim'
        }
        for (let properties in info){
            console.log(info[properties]);
        }


        // 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:


        let info = {
            personagem: 'Margarida',
            origem: 'Pato Donald',
            nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
            recorrente: 'Sim',
          };
          
          let info2 = {
            personagem: 'Tio Patinhas',
            origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
            nota: 'O último MacPatinhas',
            recorrente: 'Sim',
          };
          
          for (let properties in info) {
            if (
              properties === 'recorrente' &&
              info[properties] === 'Sim' &&
              info2[properties] === 'Sim'
            ) {
              console.log('Ambos recorrentes');
            } else {
              console.log(info[properties] + ' e ' + info2[properties]);
            }
          }

        //   Usando o objeto abaixo, faça os exercícios a seguir:

        let leitor = {
            nome: 'Julia',
            sobrenome: 'Pessoa',
            idade: 21,
            livrosFavoritos: [
              {
                titulo: 'O Pior Dia de Todos',
                autor: 'Daniela Kopsch',
                editora: 'Tordesilhas',
              },
            ],
          };

        //   6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'.

          console.log('o livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' ' +'se chama ' + leitor.livrosFavoritos[0].titulo);
         

        //   7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:

        let leitor = {
            nome: 'Julia',
            sobrenome: 'Pessoa',
            idade: 21,
            livrosFavoritos: [
              {
                titulo: 'O Pior Dia de Todos',
                autor: 'Daniela Kopsch',
                editora: 'Tordesilhas',
              },
            ],
          };

          console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);


          leitor.livrosFavoritos.push(
            {
              titulo: 'Harry Potter e o Prisioneiro de Azkaban',
              autor: 'JK Rowling',
              editor: 'Rocco',
            },
          );

          console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');


        // Exercícios:
        
          //   Parte 2 - Funções

        //   1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

        function verificaPalindrome(word){
         for(index in word){
             if(word[index] != word[(word.length - 1) - index]){
                return false;
             }
         }
         return true;
        }

        console.log(verificaPalindrome('arara'));
        console.log(verificaPalindrome('desenvolvimento'));

        // 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

        function indiceDoMaior(numeros) {
            let indiceMaior = 0;
            for (let indice in numeros) {
              if (numeros[indiceMaior] < numeros[indice]) {
                indiceMaior = indice;
              }
            }
            return indiceMaior;
          }
          
          console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

        //   3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

        function indiceDoMenor (numeros) {
            let indiceMenor = 0;
            for (let indice in numeros) {
                if (numeros[indiceMenor] > numeros[indice]) {
                    indiceMenor = indice;
                }
            }
            return indiceMenor;
        }
        console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));

        // 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

        function maiorPalavra(palavra) {
            let maiorPalavra = palavra[0];
            for (let indice in palavra) {
            if (maiorPalavra.length < palavra[indice].length) {
                maiorPalavra = palavra[indice];
            }
          }
          return maiorPalavra;
        }
        console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

        //    5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

        function repeteNumber(numeros) {
            let contRepetido = 0;
            let contNumero = 0;
            let indexNumeroRepetido = 0;
            for (let index in numeros) {
              let verificaNumero = numeros[index];
              for (let index2 in numeros) {
                if (verificaNumero === numeros[index2]) {
                  contNumero += 1;
                }
              }
              if (contNumero > contRepetido) {
                contRepetido = contNumero;
                indexNumeroRepetido = index;
              }
              contNumero = 0;
            }
            return numeros[indexNumeroRepetido];
          }


console.log(repeteNumber([2, 3, 2, 5, 8, 2, 3]));

// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function numerosTotaisSomados(number) {
    let total = 0;
    for (let index = 1; index <= number; index += 1){
        total = total + index;
    }
    return total;
}
console.log(numerosTotaisSomados(5));

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .


function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split('');
    fimPalavra = fimPalavra.split('');
    controle = true;
    for (let index = 0; index < fimPalavra.length; index += 1) {
      if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
        controle = false;
      }
    }
    return controle;
  }
  
  
  
  console.log(verificaFimPalavra('trybe', 'be')); 
  console.log(verificaFimPalavra('joaofernando', 'fernan')); 