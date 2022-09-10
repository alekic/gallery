import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { AuthProvider } from '@auth';
import { ThemedSafeAreaProvider } from '@components';
import { RootStackNavigator, ThemedNavigationContainer } from '@navigation';
import theme from '@theme';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NativeBaseProvider theme={theme}>
        <ThemedSafeAreaProvider>
          <AuthProvider>
            <ThemedNavigationContainer>
              <RootStackNavigator />
            </ThemedNavigationContainer>
          </AuthProvider>
        </ThemedSafeAreaProvider>
      </NativeBaseProvider>
    </>
  );
}

registerRootComponent(App);
