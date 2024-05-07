import { defineConfig } from 'vite'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import vue from '@vitejs/plugin-vue'
import mkcert from'vite-plugin-mkcert'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    libInjectCss(),
    mkcert(),
    dts({include: ['lib'] })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      // name: "@arc/arc-components",
      formats: ['es']
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ['vue'],
      input: Object.fromEntries(
        glob.sync('lib/**/*.{ts,tsx,vue}').map(file => [
          // The name of the entry point
          // lib/nested/foo.ts becomes nested/foo
          relative(
            'lib',
            file.slice(0, file.length - extname(file).length)
          ),
          // The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js'
      }
    }
  },
  server: {
    port:8080
  }
})
