import { render, screen } from '@test-utils';
import HomeScreen from './HomeScreen';

test.skip('renders correctly', () => {
  render(<HomeScreen />);

  expect(screen.getByText(/home/i)).toBeDefined();
});
