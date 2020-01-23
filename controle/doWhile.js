function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = -1; // pode ser o mesmo valor da condição pois irá executar o teste após a primeira repetição

do {
  opcao = getInteiroAleatorioEntre(-1, 10);
  console.log(`Opção escolhida foi ${opcao}.`);
} while (opcao != -1); // só irá fazer esse teste após a primeira repetição

console.log("Até a próxima");
