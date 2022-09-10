import { useAuth } from '@auth';
import i18n from '@i18n';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from '@screens';
import DrawerNavigator from './DrawerNavigator';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  const { isSigningOut, token } = useAuth();

  return (
    <Stack.Navigator initialRouteName="SignIn">
      {token === null ? (
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            animationTypeForReplace: isSigningOut ? 'pop' : 'push',
            headerShown: false,
            title: i18n.t('Sign in')
          }}
        />
      ) : (
        <Stack.Screen
          name="Root"
          component={DrawerNavigator}
          options={{
            headerShown: false
          }}
        />
      )}
    </Stack.Navigator>
  );
}
