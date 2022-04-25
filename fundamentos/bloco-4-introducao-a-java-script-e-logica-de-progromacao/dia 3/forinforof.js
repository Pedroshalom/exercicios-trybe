let pizzas = {
    sabor: 'Calabresa',
    preço: 40,
    bordaRecheada: true
}
for(let key in pizzas) {
    console.log(key);//mostrando as chaves
    console.log(pizzas);//mostrando objeto
    console.log(pizzas.preço);//mostrando pela propriedade
    console.log(pizzas[key]);//mostrando pelo valor
}

let pizzasDoces = ['chocolate', 'banana', 'morango']

for(let key in pizzasDoces) {
    console.log(pizzasDoces[key])
    // console.log(key, pizzasDoces[key])// mostra pelo índice
}

//Exercícios para fixar:

//1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 
// 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for(let name in names) {
    console.log('Olá, ' + names[name]);
  }

  //2 - Usando o objeto abaixo, utilize for/in e imprima um console.log 
  //com as chaves e valores desse objeto.

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let key in car){
      console.log(key, car[key]);//mostrando chaves e valores
  }

  let amigos = {
      Boris: 'Gol',
      Pedro: 'Celta',
      Uil: 'Vectra'
  }

  for(let key in amigos) {
      console.log(key, amigos[key]);
  }