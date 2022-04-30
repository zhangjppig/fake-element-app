import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import vitePluginStylusAlias from 'vite-plugin-stylus-alias';

export default () => {
  return defineConfig({
    base: './',
    server: {
      port: process.env.PORT,
    },
    resolve: {
      alias: {
        'cube-ui': 'cube-ui/lib',
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    plugins: [
      // vue 插件
      createVuePlugin(),

      // 处理 stylus alias
      vitePluginStylusAlias(),
    ],
  });
};
