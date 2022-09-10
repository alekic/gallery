import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { ThemedSafeAreaProvider } from '@components';
import { RootStackNavigator, ThemedNavigationContainer } from '@navigation';
import theme from '@theme';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NativeBaseProvider theme={theme}>
        <ThemedSafeAreaProvider>
          <ThemedNavigationContainer>
            <RootStackNavigator />
          </ThemedNavigationContainer>
        </ThemedSafeAreaProvider>
      </NativeBaseProvider>
    </>
  );
}

registerRootComponent(App);
