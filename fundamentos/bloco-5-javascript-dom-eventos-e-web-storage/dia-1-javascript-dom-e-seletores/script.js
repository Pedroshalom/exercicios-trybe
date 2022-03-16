function changeText() {
    let paragraph = document.getElementsByTagName('p')[1];
    paragraph.innerHTML = "Proporcionar para mim mesmo e para minha família sempre o melhor"
  }
  changeText();

  
        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
        function changeText() {
    let paragraph = document.getElementsByTagName('p')[1];
    paragraph.innerHTML = "Proporcionar para mim mesmo e para minha família sempre o melhor"
  }
  changeText();
  function changeColorgreen() {
  let quadradoAmarelo = document.getElementsByClassName('main-content')[0];
  quadradoAmarelo.style.background = "rgb(76,164,109)"
  }
  changeColorgreen();

  function changeColorWhite() {
    let quadradoVermelho = document.getElementsByClassName('center-content') [0];
    quadradoVermelho.style.background = "white"
  }
  changeColorWhite();

  function corrigindoTitulo() {
      let novoTitulo = document.getElementsByTagName('h1')[0];
      novoTitulo.innerHTML = "Exercício 5.1 - Javascript";
    }
    corrigindoTitulo();

    function paragrafoMaiusculo() {
      let paragrafo = document.getElementsByTagName('p')[0];
      paragrafo.innerHTML = paragrafo.innerHTML.toUpperCase();
    }
    paragrafoMaiusculo();

    function mostrarPragrafo() {
      let paragrafo = document.getElementsByTagName('p');
      for (let index = 0; index < paragrafo.length; index += 1) {
        console.log(paragrafo[index].innerHTML);
      }
    }
    mostrarPragrafo();
    