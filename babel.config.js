module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          'components': './src/components',
          'constants': './src/constants',
          'screens': './src/screens',
          'navigation': './src/navigation',
          'types': './src/types',
          'utils': './src/utils',
        },
      },
    ],
  ],
};
