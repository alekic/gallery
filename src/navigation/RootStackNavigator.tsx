import i18n from '@i18n';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from '@screens';
import DrawerNavigator from './DrawerNavigator';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          title: i18n.t('Sign in'),
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Root"
        component={DrawerNavigator}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}
