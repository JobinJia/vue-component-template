import ui from '@tsdown-lib-template/ui'
import { createApp } from 'vue'
// import 'virtual:unocss-devtools'

import App from './App.vue'
// import '@unocss/reset/tailwind.css'
// import 'virtual:uno.css'
import '@tsdown-lib-template/ui/index.css'

createApp(App).use(ui).mount('#app')
