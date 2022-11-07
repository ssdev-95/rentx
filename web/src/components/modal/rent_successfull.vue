<script setup lang="ts">
  import { PhCheck } from 'phosphor-vue'
  import BaseModal from './base.vue'

	const { isOpen } = defineProps<{ isOpen: boolean }>()
</script>

<template>
  <BaseModal :isOpen="isOpen">
	  <div class="h-full w-full p-4 bg-zinc-900 bg-union bg-no-repeat bg-center mb:bg-contain flex flex-col items-center justify-center">
		  <PhCheck
			  class="text-green-600"
				:size="80"
				weight="bold"
			/>

			<strong class="text-white text-4xl mt-4">
			  Car successfully rented!
			</strong>

			<p class="text-sm text-zinc-400 mt-3">
			  Now you'll only need to reach the RentX <br/> concessionaire to get your machine.
			</p>

		  <router-link
			  to="/rents"
				class="mt-8 p-4 w-[7rem] rounded bg-zinc-800 active:bg-zinc-600 text-white font-semibold uppercase"
			>
			  Ok
			</router-link>
		</div>
	</BaseModal>
</template>
