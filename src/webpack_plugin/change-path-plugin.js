class ChangePathPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap("ChangePathPlugin", (compilation) => {
      for (const name in compilation.assets) {
        if (name.endsWith(".html")) {
          const contents = compilation.assets[name].source();
          const changePath = contents.replace(/\/static/g, "./static");
          compilation.assets[name] = {
            source: () => changePath,
            size: () => changePath.length,
          };
        }
      }
    });
  }
}

module.exports = ChangePathPlugin;
