const path = require("path");
const glob = require("glob");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.ts",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        // test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: [
                ["@babel/preset-env", { targets: { node: "8" }, loose: false }],
                // [
                //   "@babel/preset-typescript",
                //   {isTSX: true, allExtensions: true, allowDeclareFields: true}
                // ],
                [
                  "@babel/preset-react",
                  {
                    pragma: "dom", // default pragma is React.createElement (only in classic runtime)
                    pragmaFrag: "DomFrag", // default is React.Fragment (only in classic runtime)
                    throwIfNamespace: false, // defaults to true
                    runtime: "classic", // defaults to classic
                    // "importSource": "custom-jsx-library" // defaults to react (only in automatic runtime)
                  },
                ],
                ["@babel/preset-flow"],
              ],
              plugins: [
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-private-methods",
                [
                  "@babel/plugin-proposal-private-property-in-object",
                  { loose: false },
                ],
              ],
            },
          },
        ],

        include: [path.resolve(__dirname, "src")],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|js)x?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "index.js",
    clean: true,
    library: {
      name: "lib",
      type: "umd",
    },
  },
  // externals: [
  //   // Everything that starts with "library/"
  //   /^library\/.+$/,
  // ],
};
