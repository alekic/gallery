/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthContext, AuthContextProps } from '@auth';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, renderHook } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';
import type { PropsWithChildren, ReactElement } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      retry: false
    }
  },
  logger: {
    log: () => {},
    warn: () => {},
    error: () => {}
  }
});

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

function BaseProviders({ authProviderProps = {}, children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider
        value={{
          ...defaultAuthProviderProps,
          ...authProviderProps
        }}
      >
        {children}
      </AuthContext.Provider>
    </QueryClientProvider>
  );
}

function Providers({ authProviderProps = {}, children }: ProvidersProps) {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <BaseProviders authProviderProps={authProviderProps}>
          <NavigationContainer>{children}</NavigationContainer>
        </BaseProviders>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

type RenderHookOptions<Props> = Props extends object | string | number | boolean
  ? { initialProps: Props; wrapper?: React.ComponentType<any> }
  : { initialProps?: never; wrapper?: React.ComponentType<any> } | undefined;

type CustomRenderHookOptions<Props> = RenderHookOptions<Props> &
  Partial<ProvidersProps>;

function customRenderHook<Result, Props>(
  renderCallback: (props: Props) => Result,
  options?: CustomRenderHookOptions<Props>
) {
  return renderHook(renderCallback, {
    wrapper: ({ children }) => (
      <BaseProviders authProviderProps={options?.authProviderProps}>
        {children}
      </BaseProviders>
    ),
    ...options
  } as RenderHookOptions<Props>);
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
export { customRender as render, customRenderHook as renderHook };
