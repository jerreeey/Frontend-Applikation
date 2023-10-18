import { resolve } from 'path'
import { defineConfig } from 'vite'
import obfuscatorPlugin from "vite-plugin-javascript-obfuscator";


const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  root,
  base: "/Frontend-Applikation/",
  plugins: [
    obfuscatorPlugin({
      options: {
        debugProtection: true,
      },
      apply: 'build'
    }),
  ],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about/index.html'),
        favorites: resolve(__dirname, 'src/favorites/index.html')
      },
    },
  },
})