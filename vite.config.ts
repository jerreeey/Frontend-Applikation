import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: "/Frontend-Applikation/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'src/about/index.html')
      },
    },
  },
})