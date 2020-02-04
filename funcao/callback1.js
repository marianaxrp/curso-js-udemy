// passar uma função para outra função e quando determinado evento acontecer
// a função passada vai ser chamada de volta

const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir); // para cada elemento encontrado no array, ele vai chamar de volta a função
fabricantes.forEach(function(fabricante) {
  console.log(fabricante);
});
fabricantes.forEach(fabricante => console.log(fabricante));
