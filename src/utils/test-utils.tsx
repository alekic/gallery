/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthContext, AuthContextProps } from '@auth';
import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';
import type { PropsWithChildren, ReactElement } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const defaultAuthProviderProps: AuthContextProps = {
  isLoading: false,
  isSigningIn: false,
  isSigningOut: false,
  signIn: jest.fn(),
  signOut: jest.fn(),
  token: null
};

type ProvidersProps = PropsWithChildren<{
  authProviderProps?: Partial<AuthContextProps>;
}>;

function Providers({ authProviderProps = {}, children }: ProvidersProps) {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <AuthContext.Provider
          value={{
            ...defaultAuthProviderProps,
            ...authProviderProps
          }}
        >
          <NavigationContainer>{children}</NavigationContainer>
        </AuthContext.Provider>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

type RenderOptions = {
  wrapper?: React.ComponentType<any>;
  createNodeMock?: (element: React.ReactElement) => any;
};

type CustomRenderOptions = RenderOptions & Partial<ProvidersProps>;

function customRender(component: ReactElement, options?: CustomRenderOptions) {
  return render(component, {
    wrapper: ({ children }) => (
      <Providers authProviderProps={options?.authProviderProps}>
        {children}
      </Providers>
    ),
    ...options
  });
}

export * from '@testing-library/react-native';
export { customRender as render };
