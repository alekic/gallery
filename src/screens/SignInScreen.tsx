import { Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackScreenProps } from '@navigation/types';

export default function SignInScreen({
  navigation
}: RootStackScreenProps<'SignIn'>) {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Sign In"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});
