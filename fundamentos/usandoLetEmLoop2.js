const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}

funcs[2](); // tem escopo de bloco, guarda a posição de i na memória
funcs[8](); // função tem consciência do local que ela foi definida