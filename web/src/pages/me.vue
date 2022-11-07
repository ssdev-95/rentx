<script setup lang="ts">
  import { Ref, ref, onMounted } from 'vue'
	import { PhPower, PhUser, PhEnvelope, PhCar, PhLock } from 'phosphor-vue'
	import { useRouter } from 'vue-router'

  import BaseLayout from './layouts/default.vue'
	import RentCard from '../components/rent_card.vue'

  import { useAuthStore } from '../composables/stores/auth'
	import { useRentStore } from '../composables/stores/rents'

	const router = useRouter()
  const authStore = useAuthStore()

	let name = ref(
	  `${authStore.getUser.firstName} ${authStore.getUser.lastName}`
	)
	let email = ref(authStore.getUser.email)
	let password = ref('')
	let oldPassword = ref('')
	let cnh = ref(authStore.getUser.cnh)

	const selectedTab:Ref<'info' | 'password'> = ref('info')

  function logout() {
    authStore.removeUser()
		localStorage.removeItem('@rentx:token')
		localStorage.removeItem('@rentx:user')

		router.push('/me/signin')
	}
</script>

<template>
  <BaseLayout>
      <div class="flex-1 flex mb:flex-col items-start mb:items-center gap-6 min-h-full">
        <div class="h-full w-[375px] p-6 flex flex-col items-center gap-2">
          <img
					  :src="authStore.getUser.avatar"
						class="w-[60%] h-auto rounded-full"
						alt=""
					/>

					<div class="flex flex-col gap-2 w-full">
					  <header
						  role="radiogroup"
							class="flex gap-12 justify-center"
						>
						  <label
							  class="flex-none"
								:class="selectedTab === 'info' ? 'text-zinc-800' : 'text-zinc-400'"
							>
							  Infos

							  <input
								  type="radio"
									value="info"
									v-model="selectedTab"
									class="hidden"
								/>
							</label>

							<label
							  class="flex-none"
								:class="selectedTab === 'password' ? 'text-zinc-800' : 'text-zinc-400'"
							>
							  Change password

							  <input
								  type="radio"
									value="password"
									v-model="selectedTab"
									class="hidden"
								/>
							</label>
						</header>

						<form class="w-full flex flex-col gap-2">
						  <div
							  v-if="selectedTab === 'info'"
								class="w-full flex flex-col gap-2"
							>
							  <label class="flex items-center h-[3.5rem] gap-[2px] bg-white focus-within:ring-[2px] focus-within:ring-zinc-400">
								  <div class="p-4">
									  <PhUser weight="bold" />
									</div>

									<div class="flex-1 flex flex-col text-left">
									  <span class="text-zinc-400 text-sm">
										  Name
										</span>
										<input
										  class="w-full outline-0 text-zinc-500"
											v-model="name"
										/>
									</div>
								</label>

								<label class="flex items-center h-[3.5rem] gap-[2px] bg-white focus-within:ring-[2px] focus-within:ring-zinc-400">
								  <div class="p-4">
									  <PhEnvelope weight="bold" />
									</div>

									<div class="flex-1 flex flex-col text-left">
									  <span class="text-zinc-400 text-sm">
										  E-mail
										</span>
										<input
										  class="w-full outline-0 text-zinc-500"
											v-model="email"

										/>
									</div>
								</label>

								<label class="flex items-center h-[3.5rem] gap-[2px] bg-white focus-within:ring-[2px] focus-within:ring-zinc-400">
								  <div class="p-4">
									  <PhCar weight="bold" />
									</div>

									<div class="flex-1 flex flex-col text-left">
									  <span class="text-zinc-400 text-sm">
										  CNH
										</span>
										<input
										  type="number"
											class="w-full outline-0 text-zinc-500"
											v-model="cnh"
										/>
									</div>
								</label>
							</div>

							<div
							  v-if="selectedTab === 'password'"
								class="w-full flex flex-col gap-2"
							>
							  <label class="flex items-center h-[3.5rem] gap-[2px] bg-white focus-within:ring-[2px] focus-within:ring-zinc-400" >
								  <div class="p-4">
									  <PhLock weight="bold" />
									</div>

								  <input
									  class="flex-1 p-4 outline-0 text-zinc-500"
										placeholder="Current password"
										v-model="oldPassword"
									/>
								</label>

								<label class="flex items-center h-[3.5rem] gap-[2px] bg-white focus-within:ring-[2px] focus-within:ring-zinc-400">
								  <div class="p-4">
									  <PhLock weight="bold" />
									</div>

								  <input
										class="flex-1 p-4 outline-0 text-zinc-500"
										v-model="password"
										placeholder="New password"
									/>
								</label>

								<label class="flex items-center h-[3.5rem] gap-[2px] bg-white focus-within:ring-[2px] focus-within:ring-zinc-400">
								  <div class="p-4">
									  <PhLock weight="bold" />
									</div>

									<input
									  class="flex-1 p-4 outline-0 text-zinc-500"
										v-model="password"
										placeholder="Retype password"
									/>
								</label>
							</div>

							<button
							  disabled
							  class="p-3 w-full bg-red-500 disabled:bg-red-400 text-zinc-100 disabled:bg-red-400"
							>
							  Save changes
							</button>
						</form>
					</div>
        </div>

        <div class="flex-1 flex flex-col justify-start gap-5 px-6 pt-6 mb:pb-20">
				  <h1 class="text-2xl text-left font-semibold">
					  My rents
					</h1>
					
					<div class="flex-1 flex flex-col gap-4 justify-start">
					  <RentCard
						  v-for="rent in useRentStore().getRents"
							:key="rent.id"
							:rent="rent"
						/>
					</div>
				</div>
      </div>
  </BaseLayout>
</template>
