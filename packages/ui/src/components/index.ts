import type { App } from 'vue'
import { Button } from './button'
import { Input } from './input'

export function install(app: App) {
  app.component(Button.name!, Button)
  app.component(Input.name!, Input)
}

export default {
  install,
  Button,
  Input,
}
