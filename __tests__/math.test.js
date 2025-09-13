const { soma, subtracao, multiplicacao, divisao } = require("../math.js");

test("soma de 2 + 3 = 5", () => {
  expect(soma(2, 3)).toBe(5);
});

test("subtração de 10 - 4 = 6", () => {
  expect(subtracao(10, 4)).toBe(6);
});

test("multiplicação de 3 * 7 = 21", () => {
  expect(multiplicacao(3, 7)).toBe(21);
});

test("divisão de 20 / 4 = 5", () => {
  expect(divisao(20, 4)).toBe(5);
});

test("divisão por zero deve lançar erro", () => {
  expect(() => divisao(10, 0)).toThrow("Divisão por zero não é permitida!");
});