import { render, screen } from '@test-utils';
import { Text } from 'native-base';
import ThemedSafeAreaProvider from './ThemedSafeAreaProvider';

test('renders correctly', () => {
  render(
    <ThemedSafeAreaProvider>
      <Text>foobar</Text>
    </ThemedSafeAreaProvider>
  );

  expect(screen.getByText(/foobar/i)).toBeDefined();
});
