import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, SignInScreen } from '../screens';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          title: 'Sign In',
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home'
        }}
      />
    </Stack.Navigator>
  );
}
