import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(),],
  server: {
    // 指定开发服务器端口
    port: 8090,
    // 监听所有地址，包括局域网和公网地址，以便通过 IP 访问
    host: true 
  },
})
