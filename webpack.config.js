const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
    publicPath: "./",
    assetModuleFilename: "[name][ext]",
  },
  module: {
    rules: [
      { test: /\.svg$/, use: "svg-inline-loader" },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  watch: true,
};
