let comparaComThis = function(param) {
  console.log(this === param);
};

comparaComThis(global); // no node o objeto global chama global, no browser chama window

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param); // em arrow, o this aponta para o obj corrente
// (p/ o módulo corrente)
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj); // o this aponta para o obj para qual a função foi escrita, não muda a referência de this
comparaComThisArrow(module.exports);
