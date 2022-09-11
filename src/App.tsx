import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { AuthProvider } from '@auth';
import { ThemedSafeAreaProvider } from '@components';
import { RootStackNavigator, ThemedNavigationContainer } from '@navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import theme from '@theme';

const queryClient = new QueryClient({
  logger: {
    log: console.log,
    warn: console.warn,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    error: process.env.NODE_ENV === 'test' ? () => {} : console.error
  }
});

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NativeBaseProvider theme={theme}>
        <ThemedSafeAreaProvider>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <ThemedNavigationContainer>
                <RootStackNavigator />
              </ThemedNavigationContainer>
            </AuthProvider>
          </QueryClientProvider>
        </ThemedSafeAreaProvider>
      </NativeBaseProvider>
    </>
  );
}

registerRootComponent(App);
