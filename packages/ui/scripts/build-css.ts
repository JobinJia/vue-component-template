import { execSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import c from 'ansis'
import { glob } from 'tinyglobby'

const SFC_DIR = fileURLToPath(new URL('../src', import.meta.url))
const OUTPUT_DIR = path.resolve('dist/components')
const GLOBS = ['components/**/*.vue']
const CONFIG_FILE = fileURLToPath(new URL('../../uno.config.ts', import.meta.url))

export async function buildCSS() {
  const files = await glob(GLOBS, {
    cwd: SFC_DIR,
    absolute: false,
  })

  for (const file of files) {
    const absFile = path.resolve(SFC_DIR, file)
    const name = path.basename(file, '.vue').toLowerCase()
    const output = path.join(`${OUTPUT_DIR}/${name}`, `${name}.css`)

    const cmd = `npx unocss "${absFile}" -c ${CONFIG_FILE} -o "${output}"`
    try {
      execSync(cmd, {
        cwd: SFC_DIR,
        stdio: 'inherit',
      })
      console.log(`${c.green('✓')} ${name}.css built`)
    } catch (e) {
      console.error(`${c.red('✗')} failed to build ${name}.css`, e)
    }
  }
}
