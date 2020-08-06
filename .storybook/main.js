module.exports = {
  stories: ['../packages/core/**/*.stories.tsx'],
  addons: ['@storybook/preset-typescript', '@storybook/addon-actions/register', '@storybook/addon-knobs/register'],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });
    config.resolve.extensions.push('.ts', '.tsx', '.scss');
    return config;
  },
};
