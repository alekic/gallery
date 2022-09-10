/* globals jest */

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import { View as MockIcon } from 'react-native';
import { setUpTests } from 'react-native-reanimated/lib/reanimated2/jestUtils';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.mock('expo-localization', () => ({
  ...jest.requireActual('expo-localization'),
  locale: 'en-US'
}));

jest.mock('expo-secure-store', () => {
  const items = {};

  return {
    deleteItemAsync: jest.fn(async (key) => delete items[key]),

    getItemAsync: jest.fn(async (key) => (key in items ? items[key] : null)),

    isAvailableAsync: jest.fn(() => true),

    setItemAsync: jest.fn(async (key, value) => (items[key] = value))
  };
});

jest.mock('native-base', () => ({
  ...jest.requireActual('native-base'),
  Icon: MockIcon
}));

jest.mock('react-native-reanimated', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  //
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native/Libraries/Linking/Linking');

setUpTests();
