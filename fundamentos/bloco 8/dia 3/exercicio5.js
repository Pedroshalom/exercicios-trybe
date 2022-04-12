//5 - Dado o array de nomes, retorne a quantidade de vezes em que 
//aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
   
  return names.reduce((acumulador, valor) =>
     acumulador + valor.split('').reduce((acumulador, valor) => {
        if (valor === 'a' || valor === 'A') return acumulador + 1;
        return acumulador;
     }, 0), 0);
    }
    console.log(containsA());