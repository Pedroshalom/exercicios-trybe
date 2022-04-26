
// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()
// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function alterarTexto() {
    let paragrafo = document.getElementsByTagName('p')[1];
    paragrafo.innerHTML = 'Quero viver bem'
}
alterarTexto();
// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function mudarQuadrado() {
    let quadradoAmarelo = document.getElementsByClassName('main-content')[0];
    quadradoAmarelo.style.background = 'rgb(76, 164, 109)';
}
mudarQuadrado();
// Crie uma função que mude a cor do quadrado vermelho para branco.
function mudarQuadrado() {
    let quadradoVermelho = document.getElementsByClassName('center-content')[0];
    quadradoVermelho.style.background = 'white';
}
mudarQuadrado();
// Crie uma função que corrija o texto da tag <h1>.
function corrigeTitulo() {
    let titulo = document.getElementsByTagName('h1')[0];
    titulo.innerHTML = 'Exercício 5.1 - JavaScripit'
}
corrigeTitulo();
// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function corrigeTexto() {
    let paragrafo = document.getElementsByTagName('p')[0];
    paragrafo.innerHTML = paragrafo.innerHTML.toUpperCase();
}
corrigeTexto();
// Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function exibaParagrafo() {
    let paragrafo = document.getElementsByTagName('p');
    for (let index = 0; index < paragrafo.length; index += 1) {
        console.log(paragrafo[index].innerHTML);
    }
}

exibaParagrafo();
