import { Screen } from '@components';
import i18n from '@i18n';
import { Text } from 'native-base';

export default function HomeScreen() {
  return (
    <Screen centerContent>
      <Text>{i18n.t('Home')}</Text>
    </Screen>
  );
}
