module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '^@components(.*)$': './src/components\\1',
            '^@navigation(.*)$': './src/navigation\\1',
            '^@screens(.*)$': './src/screens\\1',
            '^@test-utils$': './src/utils/test-utils',
            '^@theme(.*)$': './src/theme\\1'
          }
        }
      ],
      'react-native-reanimated/plugin'
    ]
  };
};
