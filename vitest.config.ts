import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [vue() as any, vueJsx() as any, UnoCSS()],
  test: {
    include: ['**/__tests__/**/*.spec.[tj]s'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      './playground/**/*.*',
    ],
    globals: true,
    environment: 'happy-dom',
    alias: {
      '@ui/': new URL('./packages/ui/src/', import.meta.url).pathname,
    },
  },
})
