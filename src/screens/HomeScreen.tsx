import { Screen } from '@components';
import i18n from '@i18n';
import { useMediaItems } from '@media';
import { HStack, Image, Spinner, Text, VStack } from 'native-base';

export default function HomeScreen() {
  const { data, isError, isFetching } = useMediaItems({ pageSize: 100 });

  return (
    <Screen
      centerContent={isError || isFetching}
      safeArea={false}
      scrollable
    >
      {isError ? (
        <VStack alignItems="center">
          <Text>{i18n.t('media_items_loading_error')}</Text>
        </VStack>
      ) : isFetching ? (
        <Spinner
          accessibilityLabel={i18n.t('Loading')}
          size="lg"
        />
      ) : (
        <HStack flexWrap="wrap">
          {data?.mediaItems?.map((item) => (
            <Image
              alt={item.filename}
              key={item.id}
              size="xl"
              source={{ uri: item.baseUrl }}
            />
          ))}
        </HStack>
      )}
    </Screen>
  );
}
