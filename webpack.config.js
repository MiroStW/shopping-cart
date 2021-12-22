const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.js", "./src/shared/assets/style.css"],
  output: {
    filename: "[name].js", // filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, "build/"),
    publicPath: "/",
    // publicPath: "/shopping-cart/",
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
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        include: path.resolve("src"),
        use: ["babel-loader", "ts-loader"],
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
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: ["src", "node_modules"],
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
