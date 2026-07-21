const { calculateFine, isValidBookCode } = require('../book');

describe('calculateFine', () => {
  test('calcula correctamente la multa', () => {
    expect(calculateFine(5)).toBe(2.5);
  });

  test('retorna cero para cero dias de retraso', () => {
    expect(calculateFine(0)).toBe(0);
  });

  test('rechaza numeros negativos', () => {
    expect(() => calculateFine(-1)).toThrow(RangeError);
  });
});

describe('isValidBookCode', () => {
  test('acepta un codigo valido', () => {
    expect(isValidBookCode('PIL101')).toBe(true);
  });

  test('rechaza un codigo invalido', () => {
    expect(isValidBookCode('PI101')).toBe(false);
  });

  test('rechaza un codigo vacio', () => {
    expect(isValidBookCode('')).toBe(false);
  });
});
