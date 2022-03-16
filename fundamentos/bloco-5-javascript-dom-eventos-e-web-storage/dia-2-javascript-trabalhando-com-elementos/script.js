// arquivo script.js

// console.log(document.getElementById('start').nextSibling) // nó

// console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>


  
// const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')

// Aula aovivo da Tamara
// 1 - Onde eu quero adicionar esse elemento?
// Esse elemento existe no meu JS?

// let container = document.getElementById('first');

// // 2 - Como criar um elemento HTML via JS?
// // 3 - Como adicionar classes a esse elemento?

// function createDivElement(classes) {
//   let newDiv = document.createElement('div');
//   newDiv.className = classes;
//   return newDiv;
// }

// // 4 - Como adicionar o elemento ao arquivo HTML?

// function addElement(parent, child) {
//   parent.appendChild(child);
// }

// // addElement(container, createDivElement('red circle small'));
// // addElement(container, createDivElement('green circle small'));
// // addElement(container, createDivElement('yellow circle small'));

// let features = ['yellow circle small', 'green square small', 'red circle small'];

// for (let feature of features) {
//   let element = createDivElement(feature);
//   addElement(container, element);
// }

// let ingredientItens = [
//     '500g de feijão carioquinha cozido',
//     '200g de toucinho',
//     '1 concha de óleo',
//     '1 cebola média picada',
//     '4 dentes de alho',
//     '5 ovos',
//     '1 colher de sopa de sal com alho',
//     'Cheiro verde a gosto',
//     '200g de farinha de mandioca'
// ];

// let ingredientList = document.querySelector('.ingredients-list');

// for (let index = 0; index < ingredientItens.length; index += 1) {
//     let ingredient = ingredientItens[index];

//     let ingredientListIten = document.createElement('li');
//     ingredientListIten.innerText = ingredient;
//     ingredientItens.classname = '.ingredients-list';

//     ingredientList.appendChild(ingredientListIten);
// }

// let ingredientListItens = document.querySelectorAll('.ingredients-list-item');
// console.log(ingredientListItens);

// for (let index = 0; index < ingredientListItens.length; index += 1) {
//     let element = ingredientListItens[index];

//     if (element.innerText.includes('toucinho')) {
//         ingredientList.removeChild(element);
//     }
// }

      

    // 1.  Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

      const elementH1 = document.createElement('h1');
      elementH1.innerText = 'Exercício 5.2 - JavaScript DOM';
      document.body.appendChild(elementH1);

    // 2. Adicione a tag main com a classe main-content como filho da tag body ;

      const elementMain = document.createElement('main');
      elementMain.className = 'main-content';
      document.body.appendChild(elementMain);

      // 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

      const elementSectionCenter = document.createElement('section');
      elementSectionCenter.className = 'center-content';
      document.body.appendChild(elementSectionCenter);

      // 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

      const paragrafo = document.createElement('p');
      paragrafo.innerHTML = 'Vamos que Vamos';
      elementSectionCenter.appendChild(paragrafo);

      // 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

      const elementSectionLeft = document.createElement('section');
      elementSectionLeft.className = 'left-content';
      elementMain.appendChild(elementSectionLeft);

      // 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

      const elementSectionRight = document.createElement('section');
      elementSectionRight.className = 'right-content';
      elementMain.appendChild(elementSectionRight);

      // 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

      const elementImg = document.createElement('img');
      elementImg.className = 'small-image';
      elementImg.src = 'https://picsum.photos/200';
      elementSectionLeft.appendChild(elementImg);

      // 8.Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

      const elementUl = document.createElement('ul');
      elementSectionRight.appendChild(elementUl);
      const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
        'Sete', 'Oito', 'Nove', 'Dez']
      for (let num in arrayNumbers) {
        const elementLi = document.createElement('li');
        elementLi.innerHTML = arrayNumbers[num];
        elementUl.appendChild(elementLi);
      }

      // 9. Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

      for (let index = 1; index <= 3; index += 1) {
        const elementH3 = document.createElement('h3');
        elementH3.innerHTML = 'Show ' + index;
        elementMain.appendChild(elementH3);
      }

    //   Parte II:
    // 1.Adicione a classe title na tag h1 criada;

      const title = document.querySelector('h1');
      title.className = 'title';

    //   2.Adicione a classe description nas 3 tags h3 criadas;

      const elementsH3 = document.getElementsByTagName('h3');
      for (let index = 0; index < 3; index += 1) {
        elementsH3[index].className = 'description';
      }

    //   3.Remova a `section` criado no passo 5 (aquele que possui a classe `left-content`). Utilize a função `.removeChild()`;

    const sectionLeftContent = document.getElementsByClassName('left-content')[0];
    elementMain.removeChild(sectionLeftContent);