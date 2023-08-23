import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // Carpeta de salida de los artefactos de construcción
  },
  optimizeDeps: {
    exclude: ["source-map-support"],
  },
})
