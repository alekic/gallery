import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from './Storage';

const mockedGetItem = AsyncStorage.getItem as jest.MockedFunction<
  typeof AsyncStorage.getItem
>;

afterAll(() => {
  jest.clearAllMocks();
});

describe('getItem', () => {
  beforeEach(() => {
    mockedGetItem.mockImplementation(async (key: string) => {
      return key === 'name' ? '"John"' : null;
    });
  });

  test('resolves with stored value', () => {
    return expect(Storage.getItem('name')).resolves.toBe('John');
  });

  test('resolves with default value when stored value is null', () => {
    return expect(Storage.getItem('age', 42)).resolves.toBe(42);
  });
});

describe('setItem', () => {
  test('stores value', () => {
    return Storage.setItem('age', 42).then(() => {
      expect(AsyncStorage.setItem).toHaveBeenCalledWith('age', '42');
    });
  });
});

describe('removeItem', () => {
  test('removes stored value', () => {
    return Storage.removeItem('name').then(() => {
      expect(AsyncStorage.removeItem).toHaveBeenCalledWith('name');
    });
  });
});
