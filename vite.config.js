import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { glob } from 'glob'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
    base: 'tailwind-css-test',
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: Object.fromEntries(
                glob.sync('*.html').map(file => [
                    path.basename(file, '.html'),
                    path.resolve(__dirname, file)
                ])
            )
        }
    }
})