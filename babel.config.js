module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '^@auth(.*)$': './src/auth\\1',
            '^@components(.*)$': './src/components\\1',
            '^@i18n(.*)$': './src/i18n\\1',
            '^@media(.*)$': './src/media\\1',
            '^@mocks(.*)$': './src/mocks\\1',
            '^@navigation(.*)$': './src/navigation\\1',
            '^@screens(.*)$': './src/screens\\1',
            '^@storage(.*)$': './src/storage\\1',
            '^@test-utils$': './src/utils/test-utils',
            '^@theme(.*)$': './src/theme\\1',
            '^@utils(.*)$': './src/utils\\1'
          }
        }
      ],
      'module:react-native-dotenv',
      'react-native-reanimated/plugin'
    ]
  };
};
