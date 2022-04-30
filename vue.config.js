const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
    },
  },
  outputDir: 'dist',
  configureWebpack: {
    resolve: {
      alias: {
        'cube-ui': 'cube-ui/lib',
      },
    },
    devServer: {
      host: 'localhost',
    },
  },
});
