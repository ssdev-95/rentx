import { reactive } from 'vue'
import { defineStore } from 'pinia'

interface User {
  firstName: string
  email: string
  avatar: string
  cnh?: string
}

export const authStore = defineStore('auth', {
    state: () => {
        const user: User = reactive({} as User)

        return { user }
    },
    getters: {
        getUser(state) {
            return state.user
        },
    },
    actions: {
        saveUser(user: User) {
            this.user = user
            console.log(this.$state.user)
        },
        removeUser() {
            this.$state.user = {} as User
        },
    },
})
