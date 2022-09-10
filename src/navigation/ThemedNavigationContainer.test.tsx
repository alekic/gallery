import { render, screen } from '@testing-library/react-native';
import { NativeBaseProvider, Text } from 'native-base';
import ThemedNavigationContainer from './ThemedNavigationContainer';

test('renders correctly', () => {
  render(
    <ThemedNavigationContainer>
      <Text>foobar</Text>
    </ThemedNavigationContainer>,
    {
      wrapper: NativeBaseProvider
    }
  );

  expect(screen.getByText(/foobar/i)).toBeDefined();
});
