function rand({ min = 0, max = 1000 }) {
  // já retira os atributos
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

// forma 1:
// console.log(rand({ max: 50, min: 40 })); // obj dentro da função

// forma 2:
const obj = { max: 50, min: 40 };
console.log(rand(obj));
console.log(rand({ min: 955 }));
console.log(rand({}));
console.log(rand());
