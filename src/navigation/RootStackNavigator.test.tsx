import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render, screen } from '@testing-library/react-native';
import RootStackNavigator from './RootStackNavigator';

beforeEach(() => {
  render(<RootStackNavigator />, {
    wrapper: NavigationContainer
  });
});

test('initially renders sign in screen', () => {
  expect(screen.getByText(/sign in/i)).toBeDefined();
});

test('navigates to home screen when sign in button is pressed', () => {
  fireEvent.press(screen.getByText(/sign in/i));

  expect(screen.getByText(/home/i)).toBeDefined();
});
