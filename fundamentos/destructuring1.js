const pessoa = {
  nome: "Ana",
  idade: 5,
  endereco: {
    logradouro: "Rua ABC",
    numero: 100
  }
};

const { nome, idade } = pessoa; // tire de dentro do objeto pessoa o atributo nome e idade
console.log(nome, idade);

const { nome: n, idade: i } = pessoa; // tire do objeto os atributos e crie variáveis com nome n, i
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

const {
  endereco: { logradouro, numero, cep }
} = pessoa;
console.log(logradouro, numero, cep);

const {
  conta: { ag, num }
} = pessoa; // não vai funcionar pois não existem esses atributos em pessoa
