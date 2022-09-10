import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type DrawerParamList = {
  Home: undefined;
};

export type RootStackParamList = {
  Root: undefined;
  SignIn: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type SignInScreenProps = RootStackScreenProps<'SignIn'>;
