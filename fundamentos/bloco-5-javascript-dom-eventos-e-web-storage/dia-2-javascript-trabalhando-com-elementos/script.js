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

      

