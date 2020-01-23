{
    {
        {
            {
                var sera = 'sera???'
                console.log(sera);
            }
        }
    }
}
console.log(sera) // var também é visível fora do escopo onde foi declarada
// em js, uma variável var só tem 2 escopos possíveis: ou é global ou escopo de função

function teste() {
    var local = 123
}

teste()
console.log(local); // 'local is not defined' pois quando declara var dentro de uma função, ela só existe dentro do escopo da função

