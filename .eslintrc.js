module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb-typescript-prettier'],
  ignorePatterns: ['*.stories.tsx', '*rc.js', '*.test.tsx', '*.config.js'],
  rules: {
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react/button-has-type': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-unused-expressions': 0,
  },
};
