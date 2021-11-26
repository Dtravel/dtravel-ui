const path = require('path')

module.exports = {
  stories: [
    // "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)"
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-css-modules-preset',
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          url: true,
          modules: {
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
      },
    },
  ],
}
