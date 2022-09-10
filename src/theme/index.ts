import { extendTheme } from 'native-base';

export default extendTheme({
  components: {
    Icon: {
      baseStyle: {
        _light: {
          color: 'dark.100'
        },
        _dark: {
          color: 'white'
        }
      }
    }
  },
  config: {
    useSystemColorMode: true
  }
});
