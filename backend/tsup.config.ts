import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  target: "es2021",
  format: "esm",
  splitting: false,
  clean: true,
})
