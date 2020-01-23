console.log(typeof Object)
console.log(typeof new Object) // instanciando função; objeto criado a partir de uma função

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // class é uma função, mas uma syntax sugar
console.log(typeof Produto)
console.log(typeof new Produto()) // pode usar os parenteses ou não

