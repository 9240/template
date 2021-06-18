const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyjWebpackPlugin = require("uglifyjs-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const PurgeCSSPlugin = require("purgecss-webpack-plugin");
const glob = require("glob");
const publicPath = "static/";
module.exports = {
  mode: process.env.NODE_ENV,
  target: process.env.NODE_ENV === "development" ? "web" : "browserslist",
  devtool:
    process.env.NODE_ENV === "development" ? "eval-cheap-source-map" : false,
  devServer: {
    contentBase: "./dist",
    port: 9000,
    hot: true,
    hotOnly: true,
  },
  entry: path.resolve(__dirname, "src/index.js"),
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        use: [
          process.env.NODE_ENV == "development"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.styl$/,
        include: path.resolve(__dirname, "src"),
        use: [
          process.env.NODE_ENV == "development"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "stylus-loader",
        ],
      },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, "src"),
        use: [
          process.env.NODE_ENV == "development"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.sass$/,
        include: path.resolve(__dirname, "src"),
        use: [
          process.env.NODE_ENV == "development"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpe?g|jpeg|gif)$/i,
        type: "asset/resource",
        include: path.resolve(__dirname, "src"),
        generator: {
          filename: publicPath + "img/[contenthash:6][ext][query]",
        },
      },
      {
        test: /\.(ttf|woff|ttf)$/i,
        type: "asset/resource",
        include: path.resolve(__dirname, "src"),
        generator: {
          filename: publicPath + "font/[contenthash:6][ext][query]",
        },
      },
      {
        test: /\.svg/,
        include: path.resolve(__dirname, "src"),
        type: "asset/inline",
      },
      {
        test: /\.(txt|mp4)/,
        include: path.resolve(__dirname, "src"),
        type: "asset/source",
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
      publicPath: "./",
      inject: "body",
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: publicPath + "css/[name][contenthash:6].css",
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, "src")}/**/*`, { nodir: true }),
    }),
    new webpack.BannerPlugin({
      banner: () => {
        return `${new Date().toLocaleString()}`;
      },
    }),
    new webpack.ProgressPlugin({
      activeModules: false,
      entries: true,
      modules: true,
      handler(percentage, message, ...args) {
        console.info((percentage * 100).toFixed(2) + "%", message, ...args);
      },
      modulesCount: 5000,
      profile: false,
      dependencies: true,
      dependenciesCount: 10000,
      percentBy: null,
    }),
  ],
  optimization: {
    minimize: true,
    providedExports: true,
    usedExports: true,
    removeEmptyChunks: true,
    minimizer: [
      new UglifyjWebpackPlugin({
        sourceMap: false,
      }),
      new CssMinimizerPlugin({
        test: /\.css$/i,
      }),
    ],
    splitChunks: {
      maxSize: 20 * 1024,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2,
        },
      },
    },
  },
  output: {
    filename: publicPath + "js/[name][contenthash:6].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./",
    assetModuleFilename: publicPath + "img/[contenthash:6][ext][query]",
    clean: true,
  },
  loader: {},
  resolveLoader: {},
};
