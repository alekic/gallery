module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '^@navigation(.*)$': './src/navigation\\1',
            '^@screens(.*)$': './src/screens\\1'
          }
        }
      ]
    ]
  };
};
