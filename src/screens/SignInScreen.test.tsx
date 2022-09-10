import { fireEvent, render, screen } from '@test-utils';
import { SignInScreenProps } from '@navigation/types';
import SignInScreen from './SignInScreen';

const navigation = { navigate: jest.fn() } as Partial<
  SignInScreenProps['navigation']
>;

beforeEach(() => {
  render(
    <SignInScreen
      navigation={navigation as SignInScreenProps['navigation']}
      route={{} as SignInScreenProps['route']}
    />
  );
});

test('renders sign in button', () => {
  expect(screen.getByText(/sign in/i)).toBeDefined();
});

test('navigates to home screen when sign in button is pressed', () => {
  fireEvent.press(screen.getByText(/sign in/i));

  expect(navigation.navigate).toBeCalledWith('Root');
});
