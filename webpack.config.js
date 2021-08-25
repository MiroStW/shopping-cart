const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.js", "./src/style.css"],
  output: {
    filename: "[name].js", // filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, "build/"),
    // publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png)$/,
        use: "url-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              ["@babel/preset-react", { development: true }],
            ],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    // publicPath: "/odin_project/react/dist/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Shopping cart app",
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      title: "Shopping cart app - 404",
      template: "./src/404.html",
      filename: "404.html",
    }),
  ],
  devtool: "eval-source-map",
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
