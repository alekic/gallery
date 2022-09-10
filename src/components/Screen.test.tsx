import { render, screen } from '@test-utils';
import { Text } from 'native-base';
import Screen from './Screen';

test('renders content', () => {
  render(
    <Screen>
      <Text>This is awesome.</Text>
    </Screen>
  );

  expect(screen.getByText(/this is awesome./i)).toBeDefined();
});
