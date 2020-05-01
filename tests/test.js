const { firstNumber, secondNumber, result } = require('..');

describe('Zmienna', () => {
  it('firstNumber powinna być typu number', async () => {
    expect(typeof firstNumber).toBe('number');
  });

  it('secondNumber powinna być typu number', async () => {
    expect(typeof secondNumber).toBe('number');
  });

  it('result powinna być typu number', async () => {
    expect(typeof result).toBe('number');
  });
});

describe('Zmienna result', () => {
  it('powinna przechowywać sumę zmiennych firstNumber i secondNumber podzieloną przez 2', async () => {
    const finalValue = (firstNumber + secondNumber) / 2;
    expect(result).toBe(finalValue);
  });
});
