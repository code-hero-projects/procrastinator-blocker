const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config = {
  entry: {
    popup: path.join(__dirname, "src/popup.tsx"),
    options: path.join(__dirname, "src/options.tsx"),
    content: path.join(__dirname, "src/scripts/content.tsx"),
    background: path.join(__dirname, "src/scripts/background.ts"),
  },
  output: { path: path.join(__dirname, "dist"), filename: "[name].js" },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png",
            },
          },
        ],
      },
      {
        test: /\.mp4$/,
        use: 'file-loader?name=videos/[name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
    plugins: [
      new TsConfigPathsPlugin({
        baseUrl: 'src'
      }),
    ],
    alias: {
      "webextension-polyfill-ts": path.resolve(path.join(__dirname, "node_modules", "webextension-polyfill-ts"))
    },
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "public", to: "." }],
    }),
  ],
};

module.exports = config;
