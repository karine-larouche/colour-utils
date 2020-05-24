import { sayHello } from '.'

test('Say hello', () => {
  expect(sayHello('Karine')).toBe('Hello Karine!');
})