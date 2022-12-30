import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
