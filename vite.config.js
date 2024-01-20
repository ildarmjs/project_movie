import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		preprocessorOptions: {
			sass: {
				additionalData: `@import '@/assets/styles/global.scss';`
			}
		}
	},
	define: {
		'process.env.VITE_BASE_URL': JSON.stringify(process.env.VITE_BASE_URL)
	}
})
