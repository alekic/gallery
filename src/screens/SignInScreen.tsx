import { useAuth } from '@auth';
import { Screen } from '@components';
import i18n from '@i18n';
import { Button, Image, useColorMode, VStack } from 'native-base';

export default function SignInScreen() {
  const { isSigningIn, signIn } = useAuth();
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
      <Button
        disabled={isSigningIn}
        isLoading={isSigningIn}
        isLoadingText={i18n.t('Signing in') + '...'}
        onPress={signIn}
      >
        {i18n.t('Sign in')}
      </Button>
    </Screen>
  );
}
