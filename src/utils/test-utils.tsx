/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';
import type { PropsWithChildren, ReactElement } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function Providers({ children }: PropsWithChildren<unknown>) {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

type RenderOptions = {
  wrapper?: React.ComponentType<any>;
  createNodeMock?: (element: React.ReactElement) => any;
};

function customRender(component: ReactElement, options?: RenderOptions) {
  return render(component, {
    wrapper: Providers,
    ...options
  });
}

export * from '@testing-library/react-native';
export { customRender as render };
