<script setup lang="ts">
  import { Ref, ref, onMounted } from 'vue'
	import { PhPower, PhUser, PhEnvelope, PhCar, PhLock } from 'phosphor-vue'
	import { useRouter } from 'vue-router'

  import BaseLayout from './layouts/default.vue'
	import RentCard from '../components/rent_card.vue'
  import { useAuthStore } from '../composables/stores/auth'
	import { useRentsStore } from '../composables/stores/rents'
	import { api } from '../services/api'
	const router = useRouter()
  const authStore = useAuthStore()
	const rentsStore = useRentsStore()

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

	onMounted(() => {
	  if(authStore.getUser) {
		  const token = localStorage.getItem('@rentx:token')

  	  api.get('/rents', {headers: {
			  'Authorization': `Bearer ${token}`
	  	}}).then(({data}) => {
			  rentsStore.saveRents(data.rents)
			})
  		.catch(console.log)
		}
	})
</script>

<template>
  <BaseLayout>
      <div class="flex-1 flex mb:flex-col items-center justify-center gap-6 min-h-full">
        <div class="h-full w-[375px] p-6 flex flex-col items-center gap-2">
          <img
					  :src="authStore.getUser.avatar"
						class="w-[60%] h-auto rounded-full"
						alt=""
					/>

					<div class="flex flex-col gap-2">
					  <header
						  role="radiogroup"
							class="flex gap-2 justify-center"
						>
						  <label
							  class="flex-1"
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
							  class="flex-1"
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

						<form>
						  <div v-if="selectedTab === 'info'">
							  <label class="flex gap-[2px] bg-white focus-within:ring-[2px] focus-within:ring-zinc-400">
								  <div class="p-4">
									  <PhUser weight="bold" />
									</div>

									<div class="flex-1 flex flex-col">
									  <span>Name</span>
										<input
										  class="w-full outline-0"
											v-model="name"
										/>
									</div>
								</label>

								<label class="flex gap-[2px] bg-white focus-within:ring-[2px] focus-within:ring-zinc-400">
								  <div class="p-4">
									  <PhEnvelope weight="bold" />
									</div>

									<div class="flex-1 flex flex-col">
									  <span>E-mail</span>
										<input
										  class="w-full outline-0"
											v-model="email"

										/>
									</div>
								</label>

								<label class="flex gap-[2px] bg-white focus-within:ring-[2px] focus-within:ring-zinc-400">
								  <div class="p-4">
									  <PhCar weight="bold" />
									</div>

									<div class="flex-1 flex flex-col">
									  <span>CNH</span>
										<input
										  type="number"
											class="w-full outline-0"
											v-model="cnh"
										/>
									</div>
								</label>
							</div>

							<div v-if="selectedTab === 'password'">
							  <label class="flex gap-[2px] bg-white focus-within:ring-[2px] focus-within:ring-zinc-400" >
								  <div class="p-4">
									  <PhLock weight="bold" />
									</div>

								  <input
									  class="flex-1 p-4 outline-0"
										placeholder="Current password"
										v-model="oldPassword"
									/>
								</label>

								<label class="flex gap-[2px] bg-white focus-within:ring-[2px] focus-within:ring-zinc-400">
								  <div class="p-4">
									  <PhLock weight="bold" />
									</div>

								  <input
										class="flex-1 p-4 outline-0"
										v-model="password"
										placeholder="New password"
									/>
								</label>

								<label class="flex gap-[2px] bg-white focus-within:ring-[2px] focus-within:ring-zinc-400">
								  <div class="p-4">
									  <PhLock weight="bold" />
									</div>

									<input
									  class="flex-1 p-4 outline-0"
										v-model="password"
										placeholder="Retype password"
									/>
								</label>
							</div>

							<button class="p-3 w-full bg-red-500 disabled:bg-red-400 text-zinc-100">
							  Save changes
							</button>
						</form>
					</div>
        </div>
        <div class="h-full">
				  <h1>My rents</h1>
					
					<div>
					  <RentCard
						  v-for="rent in rentsStore.getRents"
							:key="rent.id"
							:rent="rent"
						/>
					</div>
				</div>
      </div>
  </BaseLayout>
</template>
