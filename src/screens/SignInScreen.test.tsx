import { fireEvent, render, screen } from '@test-utils';
import SignInScreen from './SignInScreen';

test('renders sign in button', () => {
  render(<SignInScreen />);

  expect(screen.getByText(/sign in/i)).toBeDefined();
});

test('signs in when sign in button is pressed', () => {
  const signIn = jest.fn();

  render(<SignInScreen />, {
    authProviderProps: { signIn }
  });

  fireEvent.press(screen.getByText(/sign in/i));

  expect(signIn).toBeCalled();
});

test('renders loading text when signing in', () => {
  render(<SignInScreen />, {
    authProviderProps: { isSigningIn: true }
  });

  expect(screen.getByText(/signing in/i)).toBeDefined();
});
