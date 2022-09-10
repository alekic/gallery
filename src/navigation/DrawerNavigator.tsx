import { Icon } from '@components';
import i18n from '@i18n';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from '@react-navigation/drawer';
import { HomeScreen } from '@screens';
import { useColorModeValue, useToken } from 'native-base';
import { Linking } from 'react-native';
import { HeaderMenuButton } from './elements';
import { DrawerParamList } from './types';

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  const [primary] = useToken('colors', ['primary']);
  const drawerActiveTintColor = useColorModeValue(primary[500], primary[300]);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Home"
      screenOptions={{
        drawerActiveTintColor,
        headerLeft: () => <HeaderMenuButton />
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: getDrawerIcon('home'),
          title: i18n.t('Home')
        }}
      />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView
      accessibilityRole="menu"
      testID="drawer-content"
      {...props}
    >
      <DrawerItemList {...props} />
      <DrawerItem
        label={i18n.t('Help')}
        onPress={() => Linking.openURL('https://docs.expo.io/')}
        icon={getDrawerIcon('help-circle')}
      />
      <DrawerItem
        label={i18n.t('Sign out')}
        onPress={() => props.navigation.navigate('SignIn')}
        icon={getDrawerIcon('exit')}
      />
    </DrawerContentScrollView>
  );
}

type DrawerIconProps = {
  color: string;
  focused: boolean;
  size: number;
};

function getDrawerIcon(name: string) {
  return ({ color, focused }: DrawerIconProps) => (
    <Icon
      color={color}
      name={name + (focused ? '' : '-outline')}
      size="md"
    />
  );
}
