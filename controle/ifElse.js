const imprimirResultado = function(nota) {
  if (nota >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
};

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado("epa"); // comparar string com >= 7 deu falso e por isso reprovado, ao invés de dar um erro (linguagem fracamente tipada)
