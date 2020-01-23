let isAtivo = false
console.log(isAtivo);

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // nega duas vezes (negar uma vez = 1 é false, negar a negação é true)

console.log(!!3);



////////////
//////////// objects


const prod1 = {}
prod1.nome = 'Celular ultra mega' // chave = nome e valor = string passada depois
prod1.preco = 4998.00
prod1["desconto legal"] = 0.40 // evitar atributos com espaços

console.log(prod1);

const prod2 = {
    nome: "camisa polo",
    preco: 79.90
}

console.log(prod2)