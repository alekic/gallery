import { Screen } from '@components';
import { RootStackScreenProps } from '@navigation/types';
import { Button, Image, VStack } from 'native-base';

export default function SignInScreen({
  navigation
}: RootStackScreenProps<'SignIn'>) {
  return (
    <Screen centerContent>
      <VStack
        flex={0.5}
        justifyContent="center"
      >
        <Image
          alt="Gallery"
          size="lg"
          source={require('../../assets/icon.png')}
        />
      </VStack>
      <Button onPress={() => navigation.navigate('Home')}>Sign In</Button>
    </Screen>
  );
}
