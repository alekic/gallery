import { Box, IBoxProps, ScrollView } from 'native-base';
import { StyleSheet } from 'react-native';

type Props = IBoxProps & {
  centerContent?: boolean;
  scrollable?: boolean;
};

export default function Screen({
  centerContent,
  safeArea = true,
  scrollable,
  ...rest
}: Props) {
  const container = (
    <Box
      safeArea={safeArea === false ? 0 : safeArea}
      style={centerContent && styles.centerContent}
      {...rest}
    />
  );

  return scrollable ? (
    <ScrollView contentContainerStyle={centerContent && styles.centerContent}>
      {container}
    </ScrollView>
  ) : (
    container
  );
}

const styles = StyleSheet.create({
  centerContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});
