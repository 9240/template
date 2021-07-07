const resolve = (dir) => require("path").join(__dirname, dir);
module.exports = {
  publicPath: "",
  productionSourceMap: false,
  devServer: {
    port: 7070,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: "http://127.0.0.1:3000/",
        changeOrigin: true,
        pathRewrite: {
          [`^${process.env.VUE_APP_BASE_API}`]: "",
        },
      },
    },
  },
  // configureWebpack: {
  //   name: "vue最佳实践",
  //   resolve: {
  //     alias: {
  //       comps: require("path").join(__dirname, "src/components")
  //     }
  //   }
  // }
  configureWebpack: (config) => {
    config.resolve.alias.comps = require("path").join(
      __dirname,
      "src/components"
    );
    if (process.env.NODE_ENV === "development") {
      config.name = "vue best practice";
    } else {
      config.name = "vue最佳实践";
    }
  },
  // chainWebpack
  chainWebpack(config) {
    // 1.项目中默认svg加载rule排除icons/svg
    config.module.rule("svg").exclude.add(resolve("src/icons"));
    // 2.配置svg-sprite-loader
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "icon-[name]" })
      .end();
  },
};
