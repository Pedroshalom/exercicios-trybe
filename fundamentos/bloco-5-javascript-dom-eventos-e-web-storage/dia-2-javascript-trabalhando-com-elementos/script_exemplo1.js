// // 1 - Onde eu quero adicionar esse elemento?
// Esse elemento existe no meu JS?

let container = document.getElementById('first');

// 2 - Como criar um elemento HTML via JS?

let newDiv = document.createElement('div');

// 3 - Como adicionar classes a esse elemento?

newDiv.className = 'green circle small';


// 4 - Como adicionar o elemento ao arquivo HTML?

container.appendChild(newDiv);
// Forma não indicada: document.getElementById('first').appendChild(document.createElement('div'))

// Adicionando mais elementos

let newDiv1 = document.createElement('div');
let newDiv2 = document.createElement('div');

newDiv1.className = 'yellow circle small';
newDiv2.className = 'red circle small';

container.appendChild(newDiv1);
container.appendChild(newDiv2);