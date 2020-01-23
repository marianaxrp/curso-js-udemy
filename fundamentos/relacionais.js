console.log("01", "1" == 1); // compara a igualdade entre valores, não tipo
console.log("02", "1" === 1); // compara a igualdade também do tipo
console.log("03", "3" != 3); // compara a diferença do valor
console.log("04", "3" !== 3);

console.log("05", 3 < 2);

const d1 = new Date(0);
const d2 = new Date(0);
console.log("06", d1 === d2);
console.log("07", d1 == d2);
console.log("08", d1.getTime() === d2.getTime());
