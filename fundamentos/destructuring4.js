function rand([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min];
  // se mínimo for maior que máximo, inverta os lugares das variáveis
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log(rand([50, 40]));
console.log(rand([992]));
console.log(rand([, 10]));
console.log(rand([]));
console.log(rand());
