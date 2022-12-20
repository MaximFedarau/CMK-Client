module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@types': './src/types',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
