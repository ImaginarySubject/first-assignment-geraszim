const foo = require('../');

describe('foo', () => {
  test('returns with Hello World', () => {
    expect(foo()).toBe("Hello World!");
  });
});
