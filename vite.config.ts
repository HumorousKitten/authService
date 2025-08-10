import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

import path from 'path'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@app': path.resolve(__dirname, './src/app'),
			'@widgets': path.resolve(__dirname, './src/widgets'),
			'@features': path.resolve(__dirname, './src/features'),
			'@entities': path.resolve(__dirname, './src/entities'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@shared': path.resolve(__dirname, './src/shared'),
		},
	},
	plugins: [tailwindcss(), react()],
})
