module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': 0,
    'no-unused-vars': 0, // 미사용 변수 경고
    'react/self-closing-comp': 0, //
    'react-native/no-inline-styles': 0, // 인라인스타일
    'no-trailing-spaces': 0,
    'react/no-unstable-nested-components': 0,
    'react-hooks/exhaustive-deps': 0,
  },
};
