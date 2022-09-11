import { buildUrl } from './url';

const url = 'https://dev.expo.io/';

describe('buildUrl', () => {
  test('returns url with query string', () => {
    expect(buildUrl(url, { foo: 42, bar: 'xyz' })).toBe(
      url + '?foo=42&bar=xyz'
    );
  });

  test('does not append null or undefined query parameters', () => {
    expect(buildUrl(url)).toBe(url);
    expect(buildUrl(url, { foo: null, bar: undefined, baz: '' })).toBe(url);
  });
});
