import './style.css'

import { createApp } from 'vue'
import App from './App.vue'

import { router } from './pages'
import { pinia } from './composables/pinia'

import eruda from 'eruda'
import erudaDOM from 'eruda-dom'

createApp(App).use(router).use(pinia).mount('#app')

if (window && window.innerWidth <= 869 && import.meta.env.DEV) {
	eruda.init()
	eruda.add(erudaDOM)
}
