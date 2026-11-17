const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/script.js",
  output: {
    clean: true,
    filename: "script.js",
    libraryTarget: "window",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/style.css", to: "style.css" },
        { from: "./src/favicon.ico", to: "favicon.ico" },
      ],
    }),
  ],
};
