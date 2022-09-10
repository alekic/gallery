import { render, screen } from '@testing-library/react-native';
import { NativeBaseProvider, Text } from 'native-base';
import Screen from './Screen';

test('renders content', () => {
  render(
    <Screen>
      <Text>This is awesome.</Text>
    </Screen>,
    {
      wrapper: NativeBaseProvider
    }
  );

  expect(screen.getByText(/this is awesome./i)).toBeDefined();
});
