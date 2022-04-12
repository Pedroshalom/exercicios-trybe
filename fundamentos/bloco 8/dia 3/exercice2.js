const expectedResult = [
    {
      age: 31,
      author: 'Isaac Asimov',
    },
    {
      age: 38,
      author: 'H. P. Lovecraft',
    },
    {
      age: 39,
      author: 'Stephen King',
    },
    {
      age: 43,
      author: 'George R. R. Martin',
    },
    {
      age: 45,
      author: 'Frank Herbert',
    },
    {
      age: 62,
      author: 'J. R. R. Tolkien',
    },
  ];
  
  function nameAndAge() {
    return books
    .map((book) => (
      {
        author: book.author.name,
        age: book.releaseYear - book.author.birthYear,
      }
    ))
    .sort((obj1, obj2) => obj1.age - obj2.age);
}
  console.log(expectedResult);

// const ageNameAutora = (age, author) => {
//     const name = age.map((book) => {
//         return `${author.name} - ${book.age}`
//     })
    
//     return name, age
//     .sort((obj1, obj2) => obj1.age - obj2.age);
// }
// console.log(ageNameAutora(age, author));

//1 - Dada uma matriz, transforme em um array.
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
//2 - Crie uma string com os nomes de todas as pessoas autoras.
const expectedResult1 = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
  const names = books.reduce((acc, book, index, array) => {
    if (index === array.length - 1) return `${acc} ${book.author.name}.`;
    return `${acc} ${book.author.name},`;
  }, '');
  return names.trim();
}
console.log(reduceNames());

//4 - Encontre o livro com o maior nome.
const expectedResult3 = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
}

function longestNamedBook() {
  return books.reduce((biggestBook, currentBook) => {
    if (currentBook.name.length > biggestBook.name.length) {
      return currentBook;
    }
    return biggestBook;
  });
}
console.log(expectedResult3);

//5 - Dada o array de nomes, retorne a quantidade de vezes em 
//que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, curr) =>
     acc + curr.split('').reduce((acumulator, current) => {
        if (current === 'a' || current === 'A') return acumulator + 1;
        return acumulator;
     }, 0), 0);
}
console.log(containsA());

const palavras = ['o', 'rato', 'roeu', 'a', 'roupa', 'do', 'rei', 'de', 'roma'];

const travaLingua = palavras.reduce((acumulator, valorAtual) => {
  return `${acumulator} ${valorAtual}`; //usa sempre a crase (``)
  //[`${acumulator} ${valorAtual}`]retorna em array
  // return travaLingua;
})
console.log(travaLingua);
//retorna o rato roeu a roupa do rei de roma


