import { fireEvent, render, screen, within } from '@test-utils';
import { Linking } from 'react-native';
import DrawerNavigator from './DrawerNavigator';

const signOut = jest.fn();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let drawer: any;

beforeEach(() => {
  render(<DrawerNavigator />, {
    authProviderProps: { signOut }
  });

  drawer = within(screen.getByTestId('drawer-content'));
});

test('renders all drawer items', () => {
  expect(drawer.getByText(/home/i)).toBeDefined();
  expect(drawer.getByText(/help/i)).toBeDefined();
  expect(drawer.getByText(/sign out/i)).toBeDefined();
});

test("opens Expo documentation when 'Help' item is pressed", () => {
  fireEvent.press(drawer.getByText(/help/i));

  expect(Linking.openURL).toBeCalledWith('https://docs.expo.io/');
});

test("signs out when 'Sign out' item is pressed", () => {
  fireEvent.press(drawer.getByText(/sign out/i));

  expect(signOut).toBeCalled();
});
