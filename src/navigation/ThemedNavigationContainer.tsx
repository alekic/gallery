import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigationContainerProps
} from '@react-navigation/native';
import { useColorMode, useToken } from 'native-base';
import { useMemo } from 'react';

export default function ThemedNavigationContainer(
  props: NavigationContainerProps
) {
  const { colorMode } = useColorMode();
  const [card] = useToken('colors', ['dark.50']);

  const theme = useMemo(() => {
    const NavigationTheme =
      colorMode === 'light'
        ? DefaultTheme
        : {
            ...DarkTheme,
            colors: {
              ...DarkTheme.colors,
              card
            }
          };

    return {
      ...NavigationTheme,
      colors: {
        ...NavigationTheme.colors,
        background: 'transparent'
      }
    };
  }, [card, colorMode, DarkTheme, DefaultTheme]);

  return (
    <NavigationContainer
      theme={theme}
      {...props}
    />
  );
}
