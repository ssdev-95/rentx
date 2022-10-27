import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './home.vue'
import ShowRoom from './showroom.vue'
import RentPage from './rent_page.vue'
import RentsPage from './rents_page.vue'
import SigninPage from './signin_page.vue'
import SignupPage from './signup_page.vue'
import ProfilePage from './me.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/showroom', component: ShowRoom },
    { path: '/car/:id', component: RentPage },
    { path: '/me', component: ProfilePage },
    { path: '/me/signin', component: SigninPage },
    { path: '/me/signup', component: SignupPage },
		{ path: '/rents', component: RentsPage }
]

const history = createWebHashHistory()

export const router = createRouter({
    routes,
    history,
})
