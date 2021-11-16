export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#EBEBEB' },
      { name: 'dark', value: '#333333' },
      { name: 'twitter', value: '#00aced' },
      { name: 'facebook', value: '#3b5998' },
    ],
  },
}