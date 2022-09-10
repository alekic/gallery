import { render, screen } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';
import Icon from './Icon';

test('renders correctly', () => {
  render(
    <Icon
      accessibilityLabel="Home"
      name="home"
    />,
    {
      wrapper: NativeBaseProvider
    }
  );

  expect(screen.getByLabelText(/home/i)).toBeDefined();
});
