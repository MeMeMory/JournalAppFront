import alias from '@rollup/plugin-alias'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

const projectRootDir = resolve(__dirname)

export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        {
          find: '@/ui',
          replacement: resolve(projectRootDir, 'src/components/ui')
        },
        {
          find: '@/layout',
          replacement: resolve(projectRootDir, 'src/components/layout')
        },
        {
          find: '@/screens',
          replacement: resolve(projectRootDir, 'src/components/screens')
        },
        {
          find: '@',
          replacement: resolve(projectRootDir, 'src')
        }
      ]
    })
  ]
})
