import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Adjust based on your backend URL
        changeOrigin: true,
      },
    },
  },
};
