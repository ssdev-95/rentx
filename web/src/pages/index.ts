import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './home.vue'
import ShowRoom from './showroom.vue'
import RentPage from './rent_page.vue'

const routes = [
	{ path: '/', component: Home },
	{ path: '/showroom', component: ShowRoom },
	{ path: '/car/:id', component: RentPage }
]

const history = createWebHashHistory()

export const router = createRouter({
	routes,
	history,
})
