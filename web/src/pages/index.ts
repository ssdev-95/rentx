import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './home.vue'
import ShowRoom from './showroom.vue'

const routes = [
	{ path: '/', component: Home },
	{ path: '/showroom', component: ShowRoom },
]

const history = createWebHashHistory()

export const router = createRouter({
	routes,
	history,
})
