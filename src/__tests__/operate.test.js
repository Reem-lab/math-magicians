import operate from '../logic/operate';

describe('Check the result of operate', () => {
  test('15 + 3 = 18', () => {
    const object = {
      numberOne: 15,
      numberTwo: 3,
      operation: '+',
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation,
    );
    expect(result).toBe('18');
  });
  test('15 - 3 = 12', () => {
    const object = {
      numberOne: 15,
      numberTwo: 3,
      operation: '-',
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation,
    );
    expect(result).toBe('12');
  });
  test('15 x 3 = 18', () => {
    const object = {
      numberOne: 15,
      numberTwo: 3,
      operation: 'x',
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation,
    );
    expect(result).toBe('45');
  });
  test('15 ÷ 3 = 18', () => {
    const object = {
      numberOne: 15,
      numberTwo: 3,
      operation: '÷',
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation,
    );
    expect(result).toBe('5');
  });
  test('15 % 3 = 18', () => {
    const object = {
      numberOne: 15,
      numberTwo: 3,
      operation: '%',
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation,
    );
    expect(result).toBe('0');
  });
});
