import { resolve } from 'path'
import { defineConfig } from 'vite'


const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  root,
  base: "/Frontend-Applikation/",
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        signup: resolve(__dirname, 'src/pages/signup/index.html'),
        favorites: resolve(__dirname, 'src/pages/favorites/index.html')
      },
    },
  },
})