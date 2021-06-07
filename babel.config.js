module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "10",
          ie: "11",
        },
        corejs: 2,
        useBuiltIns: "usage", //按需加载
      },
    ],
  ],
};
