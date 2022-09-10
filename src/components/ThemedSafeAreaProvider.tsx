import { useColorMode, useColorModeValue, useTheme } from 'native-base';
import { useMemo } from 'react';
import {
  SafeAreaProvider,
  SafeAreaViewProps
} from 'react-native-safe-area-context';

export default function ThemedSafeAreaProvider(props: SafeAreaViewProps) {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();
  const backgroundColor = useColorModeValue(colors.white, colors.dark[100]);
  const style = useMemo(() => ({ backgroundColor }), [colorMode]);

  return (
    <SafeAreaProvider
      style={style}
      {...props}
    />
  );
}
