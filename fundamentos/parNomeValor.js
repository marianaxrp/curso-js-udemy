// par nome/valor
const saudacao = 'Opa' // contexto léxico 1 (local físico onde a variável foi definida)

function exec() {
    const saudacao = 'Falaa' //  contexto léxico 2 (contexto dentro da função)
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor (chave/valor)
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'rua blablabla',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)