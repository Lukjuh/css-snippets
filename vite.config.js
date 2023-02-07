import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        playground: resolve(__dirname, 'playground.html'),
      },
    },
  },
})