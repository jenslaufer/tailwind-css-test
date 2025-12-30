import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { glob } from 'glob'
import path from 'path'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: glob.sync('*.html').reduce((acc, file) => {
                const name = path.basename(file, '.html')
                acc[name] = path.resolve(__dirname, file)
                return acc
            }, {})
        }
    }
})