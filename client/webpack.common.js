const path = require("path");

module.exports = {
  entry: {
   main: "./src/index.js",
  },
  devServer: {
    inline:true,
    port: 8001
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
         loader: "file-loader",
         options: {
          name: "[name].[hash].[ext]",
          outputPath: 'imgs'
         }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};