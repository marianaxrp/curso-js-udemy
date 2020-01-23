// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b;
}

console.log(soma(2, 3));

// retorno implícito 
const subtracao = (a, b) => a - b // apenas se a função só tiver uma linha de código para executar
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a) // se tiver apenas um parâmetro
imprimir2('Legalll')