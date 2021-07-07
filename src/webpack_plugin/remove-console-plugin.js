class RemoveConsolePlugin {
  apply(compiler) {
    compiler.hooks.make.tap("RemoveConsole", (compilation) => {
      for (const name in compilation.assets) {
        console.log(name);
        // if (name.endsWith(".js")) {
        //   const contents = compilation.assets[name].source();
        //   const noConsole = contents.replace(/console.log.+?\)/g, "");
        //   compilation.assets[name] = {
        //     source: () => noConsole,
        //     size: () => noConsole.length,
        //   };
        // }
      }
    });
  }
}
module.exports = RemoveConsolePlugin;
