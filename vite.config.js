import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: 'https://github.com/saravananmnm/portfolio_saravanan', 
  // ... rest of your config
})
