import { defineConfig } from 'vite'

export default defineConfig({
  base: '',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        credits: './credits.html',
        '404': './404.html',
      }
    }
  }
})