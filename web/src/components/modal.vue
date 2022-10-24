<script setup lang="ts">
	import { reactive } from 'vue'
	import { PhX } from 'phosphor-vue'
	import { Calendar, DatePicker } from 'v-calendar'

	const defaultDate = new Date()

	const props = defineProps<{ isModalOpen: boolean}>()

	const emits = defineEmits(['close'])

	let range = reactive({
	  start: defaultDate,
		end: new Date(defaultDate.getFullYear(), defaultDate.getMonth(), defaultDate.getDate() + 2)
	})
</script>

<template>
  <div
	  v-if="isModalOpen"
		class="fixed top-0 left-0 h-screen w-screen bg-black/70 flex items-center justify-center"
	>
	  <div class="h-fit w-fit rounded-md flex flex-col bg-white overflow-hidden">
		  <header class="w-full flex-1 p-5 flex items-center justify-between bg-zinc-800 text-white text-md">
			  <strong>Select start/end rent dates</strong>

				<button
				  class=""
					@click="emits('close')"
				>
				  <PhX class="text-zinc-500 text-2xl" />
				</button>
			</header>
			<div class="h-[300] w-[600px] mb:w-[350px] flex mb:flex-col items-center justify-center p-1">
			  <div class="mb:w-full md:w-[350px]">
  			  <DatePicker
					  :modelValue="range"
		  			isRange
			  		color="red"
				  	is-expanded
				  />
				</div>

				<div class="flex flex-col min-h-[300px] min-w-[250px] mb:w-full mb:h-[250px] items-start justify-between mb:px-5 p-10">
				  <div class="w-full flex mb:justify-start gap-6 md:flex-col">
					  <p class="text-xs text-zinc-400 font-regular text-left leading-normal">
						  FROM

							<strong class="block mt-1 text-zinc-700 text-xl">
  						  {{range.start}}
  						</strong>
  					</p>

						<p class="text-xs text-zinc-400 font-regular text-left leading-normal">
  					  TO

  						<strong class="block mt-1 text-zinc-700 text-xl">
							  {{range.end}}
							</strong>
  					</p>
					</div>

					<button
					  class="mx-auto p-3 w-full bg-red-500 text-zinc-100 text-md font-semibold"
					>
					  Confirm
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
  .vc-container {
	  border-width: 0;
	}
</style>
