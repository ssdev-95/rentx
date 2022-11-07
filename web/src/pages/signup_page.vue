<script setup lang="ts">
  import { Ref, ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { PhLock, PhEnvelope, PhEye, PhEyeClosed, PhUser } from 'phosphor-vue'

  import BaseLayout from './layouts/default.vue'

  import { api } from '../services/api'
  import { useAuthStore } from '../composables/stores/auth'

  const router = useRouter()

  const username: Ref<string> = ref('')
  const email: Ref<string> = ref('')
  const cnh: Ref<string> = ref('')
  const password: Ref<string> = ref('')
  const passwordAgain: Ref<string> = ref('')

  const isPasswordVisible: Ref<boolean> = ref(false)
  const isSignedIn: Ref<boolean> = ref(false)

  async function handleSubmit(event: Event) {
    event.preventDefault()

    if (password.value !== passwordAgain.value) {
      alert("Passwords don't matches!")
      return
    }

    const body = {
      email: email.value,
      password: password.value,
      firstName: username.value,
    }

    const { data } = await api.post('/auth', body).catch(console.log)

    const user = {
      ...data.user,
      cnh: cnh.value,
    }

    const tokeh = data.token

    useAuthStore().saveUser(user)
    localStorage.setItem('@rentx:user', JSON.stringify(user))
    localStorage.setItem('@rentx:token', token)

    if (user) {
      setTimeout(() => {
        username.value = ''
        email.value = ''
        cnh.value = ''
        password.value = ''
        passwordAgain.value = ''

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
      <div class="flex-1 flex items-center justify-center">
        <div class="h-fit w-[300px] mb:w-full mx-auto flex flex-col gap-6">
          <h1 class="text-4xl text-zinc-800 text-left font-semibold">
            Create account
          </h1>

          <h3 class="text-lg text-zinc-700 text-left">
            Register yourself easily and fast.
          </h3>

          <form @submit="handleSubmit" class="flex flex-col gap-3 w-full">
            <label
              class="w-full flex items-center gap-[2px] focus-within:ring-[2px] focus-within:ring-zinc-400 text-zinc-500 rounded overflow-hidden"
            >
              <div class="p-4 bg-[#fff]">
                <PhUser weight="bold" />
              </div>

              <input
                class="flex-1 bg-[#fff] p-3 outline-0"
                placeholder="Your full name"
                v-model="username"
              />
            </label>

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
              class="w-full flex items-center gap-[2px] focus-within:ring-[2px] focus-within:ring-zinc-400 text-zinc-500 rounded overflow-hidden"
            >
              <div class="p-4 bg-[#fff]">
                <PhUser weight="bold" />
              </div>

              <input
                type="number"
                class="flex-1 bg-[#fff] p-3 outline-0"
                placeholder="CNH"
                v-model="cnh"
              />
            </label>

            <label
              class="w-full flex items-center gap-[2px] focus-within:ring-[2px] focus-within:ring-zinc-400 relative text-zinc-500 rounded overflow-hidden"
            >
              <div class="p-4 bg-[#fff]">
                <PhLock weight="bold" />
              </div>

              <input
                type="password"
                class="flex-1 bg-[#fff] p-3 outline-0"
                placeholder="Your password"
                v-model="password"
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
                placeholder="Do you remember?"
                v-model="passwordAgain"
              />

              <button
                class="absolute top-0 right-0 text-zinc-400 h-full px-2"
                @click="togglePasswordVisibility"
              >
                <PhEyeClosed v-if="!isPasswordVisible" weight="bold" />

                <PhEye v-else weight="bold" />
              </button>
            </label>

            <button
              :disabled="
                !password || !email || !cnh || !username || !passwordAgain
              "
              class="py-3 px-4 bg-red-500 text-white rounded disabled:bg-red-300"
            >
              Register
            </button>

            <router-link
              to="/me/signin"
              class="py-3 px-4 border border-[2px] border-zinc-400 rounded text-zinc-800"
            >
              Already has an account?
            </router-link>
          </form>
        </div>
      </div>
      <div
        class="mb:hidden bg-grade-gray bg-no-repeat bg-contain bg-center flex-1 min-h-full flex items-center justify-center"
      >
        <img src="https://i.ibb.co/ftHQDpj/dodge.png" alt="" />
      </div>
    </div>
  </BaseLayout>
</template>
