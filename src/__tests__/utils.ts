import { sum } from '@app/utils';

describe('sum', () => {
  test('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test.only('Is equal data', () => {
    const data = { a: 2, b: 3 };

    expect(data).toEqual({ a: 2, b: 3 });
  });
});
