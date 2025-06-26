import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/e-plantShopping/", // must include slashes and match your repo name exactly
  plugins: [react()],
})
