import { Box, IBoxProps } from 'native-base';
import { StyleSheet } from 'react-native';

type Props = IBoxProps & {
  centerContent?: boolean;
};

export default function Screen({ centerContent, ...rest }: Props) {
  return (
    <Box
      background="white"
      style={centerContent && styles.centerContent}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  centerContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});
