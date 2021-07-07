class RemoveCommentsPlugin {
  apply(compiler) {
    console.log("RemoveCommentsPlugin 启动");
    compiler.hooks.environment.tap("RemoveComments", () => {
      console.log("___________________RemoveComments");
    });
    compiler.hooks.emit.tap("RemoveComments", (compilation) => {
      for (const name in compilation.assets) {
        if (name.endsWith(".js")) {
          const contents = compilation.assets[name].source();
          const noComments = contents.replace(/\/\*{2,}\/s?/g, "");
          compilation.assets[name] = {
            source: () => noComments,
            size: () => noComments.length,
          };
        }
      }
    });
  }
}
module.exports = RemoveCommentsPlugin;
