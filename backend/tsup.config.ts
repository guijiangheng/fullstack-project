import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  target: "es2023",
  format: "esm",
  splitting: false,
  clean: true,
})
