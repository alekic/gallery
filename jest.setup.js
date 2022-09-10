/* globals jest */

import { View as MockIcon } from 'react-native';
import { setUpTests } from 'react-native-reanimated/lib/reanimated2/jestUtils';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

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

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native/Libraries/Linking/Linking');

setUpTests();
