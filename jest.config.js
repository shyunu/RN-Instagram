module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest.setup.js'], // Jest 실행 전에 필요한 설정 파일
  transformIgnorePatterns: [
    'node_modules/(?!react-native|react-navigation|@react-native|@react-native-community|react-native-vector-icons)',
  ],
};
