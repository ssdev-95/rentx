import './style.css'
import 'remixicon/fonts/remixicon.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './pages'

import eruda from 'eruda'
import erudaDOM from 'eruda-dom'

createApp(App).use(router).mount('#app')

if (window && window.innerWidth <= 869) {
	eruda.init()
	eruda.add(erudaDOM)
}
