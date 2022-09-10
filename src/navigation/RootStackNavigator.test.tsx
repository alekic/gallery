import { render, screen } from '@test-utils';
import RootStackNavigator from './RootStackNavigator';

test('renders sign in screen when user is not authenticated', () => {
  render(<RootStackNavigator />);

  expect(screen.getByText(/sign in/i)).toBeDefined();
});

test('renders home screen when user is authenticated', () => {
  render(<RootStackNavigator />, {
    authProviderProps: { token: 'secret' }
  });

  expect(screen.getAllByText(/home/i)).toBeDefined();
});
