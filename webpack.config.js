const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.js',
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'src/static'),
  },
  mode: 'development',
  plugins: [new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css",
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
};