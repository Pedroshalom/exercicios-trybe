
// // let nome = window.prompt('Qual é seu nome?')
// // window.alert('é um prazer em te conhecer ' + nome + '!')// o '+' siginfica concatenação
// // // window.confirm('está gostando de javascript?')

// // let n1 = Number(window.prompt('digite um numero: '))//parseInt converte de string para numero
// // let n2 = Number(window.prompt('digite outro numero: '))//parseInt converte de string para numero
// // let s = n1 + n2
// // window.alert(`a soma entre ${n1} e ${n2} é igual a ${s}`)

// // parseInt converte de string para numero.
// //  pode-se usar somente a palavra number.
// // 'string' usa-se para converter numero para string

// let nome = window.prompt('Qual é seu nome?')
// document.write(`Olá ${nome}! seu nome tem ${nome.length} letras.<br/> `)
// document.write(`Seu nome em maiúsculo é ${nome.toUpperCase()}<br/>`)
// document.write(`Seu nome em minúsculo é ${nome.toLowerCase()}`)
// //o .length mostra a quantidade de caracteres
// //o .toUpperCase mostra tudo em maiusculo
// //o . toLOwerCase mostra em minúsculo

// let p1 = document.getElementsByTagName('p')[1]// selecionando por tag
// let d = window.document.getElementById('msg')// selecionando por ID
// let c = window.document.getElementsByName('msg')[0]// selecionando por nome
// let e = window.document.getElementsByClassName('msg')// selecionando por classe
// let f = window.document.querySelector('div#msg')//seecionando por seletor
// //. = classe
//# = ID

//Eventos DOM

// let area = document.getElementById('area')
// area.addEventListener('click', clicar)
// area.addEventListener('mouseenter', entrar)
// area.addEventListener('mouseout', sair)

// function clicar() {
//     area.innerText = 'Clicou!'
//     area.style.background = 'red'
// }

// function entrar() {
// area.innerText = 'Entrou!'
// }

// function sair() {
//     area.innerText = 'Saiu!'
//     area.style.background = 'green'
// }

// function somar() {
//     let tn1 = document.getElementById('txtn1')
//     let tn2 = document.getElementById('txtn2')
//     let res = document.getElementById('res')
//     let n1 = Number(tn1.value)
//     let n2 = Number(tn2.value)
//     let s = n1 + n2
//     res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`

// }

// // CONDIÇÕES

// let vel = 60.5
// console.log(`A velocidade do seu carro é ${vel}km/h`)
// if (vel > 60) {
//     console.log('Você ultrapassou a velocidade. MULTADO!!')
// }
// console.log('Dirija sempre colocando o cinto de segurança')

// let pais = 'Paraguai'
// console.log(`Vivendo no ${pais}`)
// if ( pais == 'Brasil') {
//     console.log(' Você é Brasileiro')
// } else {
//     console.log('Você é Estrangeiro')
// }


// function calcular() {
//     let txtv = document.getElementById('txtvel')
//     let res = document.getElementById('res')
//     let vel = Number(txtv.value)
//     res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong></p>`
//     if (vel > 60) {
//         res.innerHTML += '<p>Você foi <strong>Multado!!!</strong></p>'
//     }
//     res.innerHTML += '<p>Dirija sempre com cinto de segurança</p>'
// }

// 

function teste () {
    
}
