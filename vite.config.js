import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import vitePluginStylusAlias from 'vite-plugin-stylus-alias';
import { viteExternalsPlugin } from 'vite-plugin-externals';

// const HOST = '0.0.0.0';

export default () => {
  return defineConfig({
    base: './',
    server: {
      // host: HOST,
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

      viteExternalsPlugin({
        'cube-ui': 'cube',
      }),
    ],
  });
};
