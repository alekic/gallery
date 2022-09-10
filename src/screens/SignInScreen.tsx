import { Screen } from '@components';
import { RootStackScreenProps } from '@navigation/types';
import { Button, Image, useColorMode, VStack } from 'native-base';

export default function SignInScreen({
  navigation
}: RootStackScreenProps<'SignIn'>) {
  const { colorMode } = useColorMode();
  const source =
    colorMode === 'dark'
      ? require('../../assets/icon-dark.png')
      : require('../../assets/icon-light.png');

  return (
    <Screen centerContent>
      <VStack
        flex={0.5}
        justifyContent="center"
      >
        <Image
          alt="Gallery"
          key={source}
          size="lg"
          source={source}
        />
      </VStack>
      <Button onPress={() => navigation.navigate('Home')}>Sign In</Button>
    </Screen>
  );
}
