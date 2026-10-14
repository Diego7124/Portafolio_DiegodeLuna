import { readFile } from 'node:fs/promises'

const content = await readFile(new URL('../src/data.ts', import.meta.url), 'utf8')
const required = [
  'Diego de Luna',
  'jacoblunade@gmail.com',
  'https://github.com/Diego7124',
  'https://linkedin.com/in/diego-jacob-de-luna-de-la-cruz-a843a235',
]

const missing = required.filter((value) => !content.includes(value))

if (missing.length > 0) {
  console.error(`Faltan datos esenciales: ${missing.join(', ')}`)
  process.exit(1)
}

const unsafeBlankTargets = /target=["']_blank["'](?![^>]*rel=["'][^"']*noopener)/g
const app = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8')

if (unsafeBlankTargets.test(app)) {
  console.error('Hay enlaces externos sin rel="noopener noreferrer".')
  process.exit(1)
}

console.log('Contenido esencial y enlaces externos: OK')
