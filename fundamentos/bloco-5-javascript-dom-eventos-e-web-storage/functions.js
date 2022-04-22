function somaValores(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero;
};

// console.log(somaValores(2, 2));

function verificaIdade(idade) {
if(!idade) {
    return 'insira uma idade'
}
if(idade >= 18) {
    return 'inteira'
};
return 'meia'
};

console.log(verificaIdade(18));

function retornaValorObjeto (obj) {
if(typeof obj === 'object') {
    return obj.cidade;
};
return 'passe um objeto'
};

console.log(retornaValorObjeto())