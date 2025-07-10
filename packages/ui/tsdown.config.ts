import { defineConfig } from 'tsdown'
import vue from 'unplugin-vue/rolldown'
import { buildCSS } from './scripts/build-css'

export default defineConfig([
  {
    entry: ['./src/components/index.ts'],
    outDir: 'dist/components',
    format: ['esm'],
    minify: true,
    clean: false,
    external: ['vue'],
    unbundle: true,
    plugins: [vue({ isProduction: true })],
    dts: {
      vue: true,
      sourcemap: true,
    },
    exports: {
      all: true,
      devExports: 'development',
    },
  },
])

await buildCSS()
