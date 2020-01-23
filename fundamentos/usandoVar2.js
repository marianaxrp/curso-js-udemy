var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero) // nao existe escopo de bloco (apenas função e global), por isso imprime apenas o 2