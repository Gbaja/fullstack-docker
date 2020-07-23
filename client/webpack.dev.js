const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    inline:true,
    port: 8001,
    proxy: {
      '/api': {
        target: 'http://server:8000',
        pathRewrite: { '^/api': '' },
        secure: false,
        changeOrigin: true,
      },
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. inject styles into DOM
          "css-loader", // Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      },
     ]
  }
});