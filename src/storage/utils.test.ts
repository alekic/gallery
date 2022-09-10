import { deserialize, serialize, valueOrDefault } from './utils';

const json = '{"age":42}';
const value = { age: 42 };

describe('deserialize', () => {
  test('returns null when argument is null', () => {
    expect(deserialize(null)).toBeNull();
  });

  test('deserializes JSON', () => {
    expect(deserialize(json)).toEqual(value);
  });
});

describe('serialize', () => {
  test('serializes input to JSON', () => {
    expect(serialize(value)).toBe(json);
  });
});

describe('valueOrDefault', () => {
  test("returns default when it's defined and value is null", () => {
    expect(valueOrDefault(null, 'foo')).toBe('foo');
  });

  test('otherwise returns value', () => {
    expect(valueOrDefault('foo', undefined)).toBe('foo');
    expect(valueOrDefault(null, undefined)).toBeNull();
  });
});
