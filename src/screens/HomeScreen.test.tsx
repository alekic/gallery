import { render, screen } from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

test('renders correctly', () => {
  render(<HomeScreen />);

  expect(screen.getByText(/home screen/i)).toBeDefined();
});
