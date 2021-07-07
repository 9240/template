const { resolve, join } = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
module.exports = {
  mode: "development",
  target: "web",
  entry: {
    entry1: resolve(__dirname, "src/entry1.js"),
    entry2: resolve(__dirname, "src/entry2.js")
  },
  devServer: {
    contentBase: join(__dirname, "dist"),
    compress: true,
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/i,
        use: "vue-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "entry1.html",
      template: resolve(__dirname, "public/entry1.html"),
      chunks: ["entry1"]
    }),
    new HtmlWebpackPlugin({
      filename: "entry2.html",
      template: resolve(__dirname, "public/entry2.html"),
      chunks: ["entry2"]
    }),
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new CompressionWebpackPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  optimization: {
    usedExports: true,
    minimize: true,
    splitChunks: {
      maxSize: 20 * 1024,
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "js/[name][chunkhash].bundle.js",
    publicPath: "./",
    clean: true
  }
};
