import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: { // 注意：键名是scss不是sass！
        // 这里写你想导入全局scss变量的路径，注意只能写相对路径，alias貌似在css中不会生效
        additionalData: "@import './src/assets/scss/reset.scss';@import './src/assets/scss/variable.scss';",
      },
    },
  },
  plugins: [vue()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"src"),
    }
  },
  base:'./',
  server: {
    port: 8080, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    // 代理
    proxy: {
      "/api": {
        // target: 'http://API网关所在域名',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
