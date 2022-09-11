import { render, screen, waitForElementToBeRemoved } from '@test-utils';
import RootStackNavigator from './RootStackNavigator';

test('renders sign in screen when user is not authenticated', () => {
  render(<RootStackNavigator />);

  expect(screen.getByText(/sign in/i)).toBeDefined();
});

test('renders home screen when user is authenticated', async () => {
  render(<RootStackNavigator />, {
    authProviderProps: { token: 'secret' }
  });

  await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i));

  expect(screen.getAllByText(/home/i)).toBeDefined();
});
