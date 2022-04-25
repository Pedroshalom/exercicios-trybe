
let lista = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {golden: 2, silver: 3}
};

// console.log('A jogadora ' + lista.name + ' ' + lista.lastName + ' ' + 'tem' + ' ' + lista.age + ' ' + 'anos de idade.')
// console.log('A jogadora ' + lista['name'] + ' ' + lista['lastName'] + ' ' + 'tem' + ' ' + lista['age'] + ' ' + 'anos de idade.')

// lista.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// console.log('A jogadora ' + lista.name + ' ' + lista.lastName + ' ' + 'foi eleita a melhor do mundo por ' + ' ' + lista.bestInTheWorld.length + ' ' + 'vezes')

// 5 - Acesse a chave medals e faça um console.log no seguinte formato: 
// "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

console.log('A jogadora possui ' + lista.medals.golden + ' medalhas de ouro e ' + lista.medals.silver + ' medalhas de prata.');