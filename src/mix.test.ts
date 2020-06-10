import { mix } from '.'

test('The first colour is returned when the ratio is 0', () => {
  expect(mix('#123456', '#abcdef', 0)).toBe('#123456');
});

test('The second colour is returned when the ratio is 1', () => {
  expect(mix('#123456', '#abcdef', 1)).toBe('#abcdef');
});

test('The red quantity is the ponderated average of the 2 provided colour\'s red quantities', () => {
  expect(mix('#120000', '#ee0000', .55)).toBe('#8b0000');
});

test('The green quantity is the ponderated average of the 2 provided colour\'s green quantities', () => {
  expect(mix('#001200', '#00ee00', .55)).toBe('#008b00');
});

test('The blue quantity is the ponderated average of the 2 provided colour\'s blue quantities', () => {
  expect(mix('#000012', '#0000ee', .55)).toBe('#00008b');
});

test('Unexact results are rounded', () => {
  expect(mix('#000000', '#010203', .6)).toBe('#010102');
});

test('Upper and lower case letters are accepted', () => {
  expect(mix('#000000', '#aaAA00', .5)).toBe('#555500');
});

test('.5 ratio is used when no ratio is provided', () => {
  expect(mix('#000000', '#222222')).toBe('#111111');
});

describe('Error handling', () => {
  test('Providing an invalid first colour throws a meaningful error', () => {
    const expected = 'First argument of "mix" is invalid. Expected hex colour string (e.g. #123456), but received ';
    expect(() => mix('#000', '#000000', 0)).toThrowError(expected+'#000');
  });
  
  test('Providing an invalid second colour throws a meaningful error', () => {
    const expected = 'Second argument of "mix" is invalid. Expected hex colour string (e.g. #123456), but received ';
    expect(() => mix('#000000', '#000', 0)).toThrowError(expected+'#000');
  });

  test('Hex colour strings with fewer than 6 digits are not accepted', () => {
    expect(() => mix('#12345', '#000000', 0)).toThrowError();
  });

  test('Hex colour strings with more than 6 digits are not accepted', () => {
    expect(() => mix('#1234567', '#000000', 0)).toThrowError();
  });

  test('Hex colour strings that do not start with # are not accepted', () => {
    expect(() => mix('123456', '#000000', 0)).toThrowError();
    expect(() => mix('0#123456', '#000000', 0)).toThrowError();
  });

  test('Hex colour strings with characters other than hex digits are not accepted', () => {
    expect(() => mix('#1122gg', '#000000', 0)).toThrowError();
    expect(() => mix('#1122GG', '#000000', 0)).toThrowError();
  });

  test('Providing a negative ratio throws a meaningful error', () => {
    const expected = 'Third argument of "mix" is invalid. Expected number between 0 and 1 (inclusive), but received ';
    expect(() => mix('#000000', '#000000', -0.1)).toThrowError(expected+'-0.1');
  });
  
  test('Providing a ratio greater than 1 throws a meaningful error', () => {
    const expected = 'Third argument of "mix" is invalid. Expected number between 0 and 1 (inclusive), but received ';
    expect(() => mix('#000000', '#000000', 1.1)).toThrowError(expected+'1.1');
  });
});
