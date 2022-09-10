import { act, fireEvent, render, screen } from '@testing-library/react-native';
import { revokeAsync } from 'expo-auth-session';
import * as SecureStore from 'expo-secure-store';
import { PropsWithChildren } from 'react';
import { Button, Text } from 'react-native';
import AuthContext from './AuthContext';
import AuthProvider from './AuthProvider';

const mockedGetItemAsync = SecureStore.getItemAsync as jest.MockedFunction<
  typeof SecureStore.getItemAsync
>;

const AuthProviderUnderTest = ({ children }: PropsWithChildren<unknown>) => (
  <AuthProvider>
    <AuthContext.Consumer>
      {({ isLoading, token }) =>
        isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <Text>{token ? 'Signed in' : 'Signed out'}</Text>
            {children}
          </>
        )
      }
    </AuthContext.Consumer>
  </AuthProvider>
);

test('restores token on mount', async () => {
  mockedGetItemAsync.mockResolvedValueOnce('"secret"');

  render(
    <AuthProviderUnderTest>
      <AuthContext.Consumer>
        {({ token }) => <Text>{token}</Text>}
      </AuthContext.Consumer>
    </AuthProviderUnderTest>
  );

  expect(await screen.findByText('secret')).toBeDefined();
});

test('signs in correctly', async () => {
  render(
    <AuthProviderUnderTest>
      <AuthContext.Consumer>
        {({ signIn }) => (
          <Button
            onPress={signIn}
            title="Sign in"
          />
        )}
      </AuthContext.Consumer>
    </AuthProviderUnderTest>
  );

  await screen.findByText(/signed out/i);

  // Usually we would not need to wrap `fireEvent` methods with `act` since
  // they already wrap their calls in `act`, but because of this issue
  // https://github.com/callstack/react-native-testing-library/issues/379 we
  // need to do this in order to avoid "You called act(async () => ...) without
  // await" warning messages.
  await act(async () => {
    fireEvent.press(screen.getByText(/sign in/i));
  });

  expect(SecureStore.setItemAsync).toBeCalledWith('token', '"secret"');
});

test('signs out correctly', async () => {
  mockedGetItemAsync.mockResolvedValueOnce('"secret"');

  render(
    <AuthProviderUnderTest>
      <AuthContext.Consumer>
        {({ signOut }) => (
          <Button
            onPress={signOut}
            title="Sign out"
          />
        )}
      </AuthContext.Consumer>
    </AuthProviderUnderTest>
  );

  await screen.findByText(/signed in/i);

  await act(async () => {
    fireEvent.press(screen.getByText(/sign out/i));
  });

  expect(revokeAsync).toBeCalled();
  expect(SecureStore.deleteItemAsync).toBeCalledWith('token');
});
