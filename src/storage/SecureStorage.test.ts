import * as SecureStore from 'expo-secure-store';
import SecureStorage from './SecureStorage';

const mockedGetItemAsync = SecureStore.getItemAsync as jest.MockedFunction<
  typeof SecureStore.getItemAsync
>;

afterAll(() => {
  jest.clearAllMocks();
});

describe('getItem', () => {
  beforeEach(() => {
    mockedGetItemAsync.mockImplementation(async (key: string) => {
      return key === 'token' ? '"secret"' : null;
    });
  });

  test('resolves with stored value', () => {
    return expect(SecureStorage.getItem('token')).resolves.toBe('secret');
  });

  test('resolves with default value when stored value is null', () => {
    return expect(SecureStorage.getItem('username', 'jane')).resolves.toBe(
      'jane'
    );
  });
});

describe('setItem', () => {
  test('stores value', () => {
    return SecureStorage.setItem('token', 'secret').then(() => {
      expect(SecureStore.setItemAsync).toHaveBeenCalledWith(
        'token',
        '"secret"'
      );
    });
  });
});

describe('removeItem', () => {
  test('removes stored value', () => {
    return SecureStorage.removeItem('token').then(() => {
      expect(SecureStore.deleteItemAsync).toHaveBeenCalledWith('token');
    });
  });
});
