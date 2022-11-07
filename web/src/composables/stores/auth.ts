import { reactive } from 'vue'
import { defineStore } from 'pinia'

interface User {
  firstName: string
  lastName: string
  email: string
  avatar: string
  cnh?: string
}

export const useAuthStore = defineStore('auth', {
    state: () => {
        const user: User = reactive({} as User)

        return { user }
    },
    getters: {
        getUser(state) {
            return state.user
        },
        isUserLogged(state) {
            return !!Object.values(state.user).length
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
