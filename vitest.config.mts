import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
        setupFiles: ['vitest.setup.ts'],
        coverage: {
            provider: 'v8',
            exclude: ['type.ts', 'index.ts']
        }
    },
})