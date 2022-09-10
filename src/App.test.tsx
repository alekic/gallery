import { render, screen } from '@testing-library/react-native';
import App from './App';

test('initially renders sign in screen', async () => {
  render(<App />);

  expect(await screen.findByText(/sign in/i)).toBeDefined();
});
