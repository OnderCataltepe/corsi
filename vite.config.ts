import react from '@vitejs/plugin-react'
import UnoCSS from "unocss/vite"
import { defineConfig } from 'vite'


export default defineConfig({
  resolve: {
    alias: [{ find: '~', replacement: '/src' }],
  },
  plugins: [ UnoCSS(),react() ],
})
