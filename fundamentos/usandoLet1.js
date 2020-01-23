var numero = 1
{
    let numero = 2
    console.log('dentro =', numero) // vai sempre procurar a variável no escopo interno, dando preferencia ao escopo menor
}
console.log('fora =', numero) // não estão no mesmo escopo, logo imprime os dois valores