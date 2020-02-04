let dobro = function(a) {
  return 2 * a;
};

dobro = a => {
  // arrow functions são sempre anônimas, por isso precisam estar armazenadas em variáveis
  return 2 * a;
};

dobro = a => 2 * a; // se tem apenas uma linha o return é implícito
console.log(dobro(Math.PI));

let ola = function() {
  return "Olá";
};

ola = () => "Olá";
console.log(ola());
