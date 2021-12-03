const path = require('path')
// const glob = require("glob");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        // test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                ['@babel/preset-env', { targets: { node: '8' }, loose: false }],
                // [
                //   "@babel/preset-typescript",
                //   {isTSX: true, allExtensions: true, allowDeclareFields: true}
                // ],
                [
                  '@babel/preset-react',
                  {
                    pragma: 'dom', // default pragma is React.createElement (only in classic runtime)
                    pragmaFrag: 'DomFrag', // default is React.Fragment (only in classic runtime)
                    throwIfNamespace: false, // defaults to true
                    runtime: 'classic', // defaults to classic
                    // "importSource": "custom-jsx-library" // defaults to react (only in automatic runtime)
                  },
                ],
                ['@babel/preset-flow'],
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-private-methods',
                ['@babel/plugin-proposal-private-property-in-object', { loose: false }],
              ],
            },
          },
        ],

        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
      },
      {
        // test: /\.css$/i,
        // test: /\.(s)?css$/,
        test: /\.s[ac]ss$/i,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     publicPath: "/public/path/to/",
          //   },
          // },
          'style-loader',
          'css-loader',
          // "sass-loader",
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    // new MiniCssExtractPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    clean: true,
    library: {
      name: 'dtravel-ui',
      type: 'umd',
    },
  },
  externals: {
    react: 'commonjs2 react',
    'react-dom': 'commonjs2 react-dom',
  },
}
