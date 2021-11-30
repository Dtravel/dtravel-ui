module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    // "storybook-css-modules-preset",
    // {
    //   name: "@storybook/preset-scss",
    //   options: {
    //     cssLoaderOptions: {
    //       url: true,
    //       modules: true,
    //       localIdentName: "[name]__[local]--[hash:base64:5]",
    //       // modules: {
    //       //   localIdentName: "[name]__[local]___[hash:base64:5]",
    //       // },
    //     },
    //   },
    // },
  ],
};
