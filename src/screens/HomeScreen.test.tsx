import { render, screen } from '@test-utils';
import HomeScreen from './HomeScreen';

test('renders correctly', () => {
  render(<HomeScreen />);

  expect(screen.getByText(/home screen/i)).toBeDefined();
});
