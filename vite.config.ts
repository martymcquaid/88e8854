import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/6242b32c-ba72-4e0d-90aa-29aedc916866/preview/',
  plugins: [react()],
  server: {
    port: 5136,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      port: 5136,
    },
  },
})
