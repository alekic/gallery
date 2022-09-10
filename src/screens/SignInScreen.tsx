import { Screen } from '@components';
import i18n from '@i18n';
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
          alt={i18n.t('Gallery')}
          key={source}
          size="lg"
          source={source}
        />
      </VStack>
      <Button onPress={() => navigation.navigate('Root')}>
        {i18n.t('Sign in')}
      </Button>
    </Screen>
  );
}
