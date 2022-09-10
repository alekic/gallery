import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootStackNavigator } from '@navigation';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NativeBaseProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootStackNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </NativeBaseProvider>
    </>
  );
}

registerRootComponent(App);
