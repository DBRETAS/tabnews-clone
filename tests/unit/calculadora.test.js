const calculadora = require("../models/calculadora.js");
test("somar 2 + 2, deveria ser 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
  console.log(resultado);
});

test("somar 5 + 100, deveria ser 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
  console.log(resultado);
});
