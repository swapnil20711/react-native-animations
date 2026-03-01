module.exports = {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      // In Reanimated 4, you might need 'react-native-worklets/plugin'
      // depending on your Expo SDK version (often included by default now)
    ],
  };
  