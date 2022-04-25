let singer = {
    name: 'Pedro',
    lastName: 'Santos',
    idade: 37 ,
    cidade: 'Natal'
}
console.log('O aluno ' + singer.name + ' ' + singer.lastName + ' ' + 'possui ' + singer.idade + ' ' + 'anos de idade'); 
console.log('O aluno ' + singer['name'] + ' ' + singer['lastName'] + ' ' + 'possui ' + singer['idade'] + ' ' + 'anos de idade'); 