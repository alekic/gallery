import { render, screen } from '@testing-library/react-native';
import App from './App';

test('initially renders sign in screen', () => {
  render(<App />);

  expect(screen.getByText(/sign in/i)).toBeDefined();
});
