<script setup lang="ts">
  import { Ref, ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { PhLock, PhEnvelope, PhEye, PhEyeClosed } from 'phosphor-vue'

  import BaseLayout from './layouts/default.vue'

  import { api } from '../services/api'
  import { useAuthStore } from '../composables/stores/auth'

  const router = useRouter()

  const email: Ref<string> = ref('')
  const password: Ref<string> = ref('')

  const isPasswordVisible: Ref<boolean> = ref(false)
  const isSignedIn: Ref<boolean> = ref(false)

  async function handleSubmit(event: Event) {
    event.preventDefault()
    const body = {
      email: email.value,
      password: password.value,
    }

    const { data } = await api.post('/auth', body).catch(console.log)

    const user = data.user
    const token = data.token
    useAuthStore().saveUser(user)
    localStorage.setItem('@rentx:user', JSON.stringify(user))
    localStorage.setItem('@rentx:token', token)

    if (user) {
      setTimeout(() => {
        email.value = ''
        password.value = ''

        router.push('/me')
      }, 3000)
    }
  }

  function togglePasswordVisibility() {
    const passwordVisibility = !isPasswordVisible.value
    isPasswordVisible.value = passwordVisibility
  }

  onMounted(() => {
    const router = useRouter()

    if (!!Object.entries(useAuthStore().getUser).length) {
      router.push('/me')
    }
  })
</script>

<template>
  <BaseLayout>
    <div class="flex-1 flex p-10 mb:-mt-[4rem] max-w-[900px] mx-auto">
      <div
        class="mb:hidden bg-grade-gray bg-no-repeat bg-contain bg-center flex-1 min-h-full flex items-center justify-center"
      >
        <img src="https://i.ibb.co/tcwhDkK/audi-q3.png" alt="" />
      </div>

      <div class="flex-1 flex items-center justify-center">
        <div class="h-fit w-[300px] mb:w-full mx-auto flex flex-col gap-6">
          <h1 class="text-4xl text-zinc-800 text-left font-semibold">
            We're almost there.
          </h1>

          <h3 class="text-lg text-zinc-700 text-left">
            Login to start an amazing experience.
          </h3>

          <form @submit="handleSubmit" class="flex flex-col gap-3 w-full">
            <label
              class="w-full flex items-center gap-[2px] focus-within:ring-[2px] focus-within:ring-zinc-400 text-zinc-500 rounded overflow-hidden"
            >
              <div class="p-4 bg-[#fff]">
                <PhEnvelope weight="bold" />
              </div>

              <input
                type="email"
                class="flex-1 bg-[#fff] p-3 outline-0"
                placeholder="Your best email"
                v-model="email"
              />
            </label>

            <label
              class="w-full flex items-center gap-[2px] focus-within:ring-[2px] focus-within:ring-zinc-400 relative text-zinc-500 rounded overflow-hidden"
            >
              <div class="p-4 bg-[#fff]">
                <PhLock weight="bold" />
              </div>

              <input
                :type="isPasswordVisible ? 'text' : 'password'"
                class="flex-1 bg-[#fff] p-3 outline-0"
                placeholder="Your password"
                v-model="password"
              />

              <button
                class="absolute top-0 right-0 text-zinc-400 h-full px-2"
                @click="togglePasswordVisibility"
              >
                <PhEyeClosed v-if="!isPasswordVisible" weight="bold" />

                <PhEye v-else weight="bold" />
              </button>
            </label>

            <router-link
              to="/me/recover"
              class="text-left text-sm my-3 text-zinc-600"
            >
              <span>Forgot my password</span>
            </router-link>

            <button
              :disabled="!password || !email"
              class="py-3 px-4 bg-red-500 text-white rounded disabled:bg-red-300"
            >
              Login
            </button>

            <router-link
              to="/me/signup"
              class="py-3 px-4 border border-[2px] border-zinc-400 rounded text-zinc-800"
            >
              Create a free account
            </router-link>
          </form>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>
