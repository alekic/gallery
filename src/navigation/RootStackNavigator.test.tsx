import { fireEvent, render, screen } from '@test-utils';
import RootStackNavigator from './RootStackNavigator';

beforeEach(() => {
  render(<RootStackNavigator />);
});

test('initially renders sign in screen', () => {
  expect(screen.getByText(/sign in/i)).toBeDefined();
});

test('navigates to home screen when sign in button is pressed', () => {
  fireEvent.press(screen.getByText(/sign in/i));

  expect(screen.getAllByText(/home/i)).toBeDefined();
});
