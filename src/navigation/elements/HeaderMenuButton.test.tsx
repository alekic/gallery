import { DrawerParamList } from '@navigation/types';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { fireEvent, render, screen } from '@testing-library/react-native';
import HeaderMenuButton from './HeaderMenuButton';

const mockNavigation = { toggleDrawer: jest.fn() } as Partial<
  DrawerNavigationProp<DrawerParamList>
>;

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(() => mockNavigation)
}));

beforeEach(() => {
  render(<HeaderMenuButton />);
});

test('renders correctly', () => {
  expect(screen.getByLabelText(/toggle drawer/i)).toBeDefined();
});

test('toggles drawer by default when pressed', () => {
  fireEvent.press(screen.getByLabelText(/toggle drawer/i));

  expect(mockNavigation.toggleDrawer).toBeCalled();
});

test('invokes onPress handler when pressed', () => {
  const onPressMock = jest.fn();

  render(<HeaderMenuButton onPress={onPressMock} />);

  fireEvent.press(screen.getByLabelText(/toggle drawer/i));

  expect(onPressMock).toBeCalled();
});
