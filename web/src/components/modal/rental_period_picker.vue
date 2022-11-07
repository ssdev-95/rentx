<script setup lang="ts">
  import { reactive, watch } from 'vue'
  import { PhX } from 'phosphor-vue'
	import ModalBase from './base.vue'

	import { formatDate } from '../../utils/format'

  const { isOpen } = defineProps<{ isOpen: boolean }>()

  const emits = defineEmits(['close'])

  let rentalPeriod:Date[] = reactive([new Date(), null])

	function handleSelectRentalPeriod(value:Date[]) {
	  value.forEach((date, index) => {
		  rentalPeriod[index] = date
		})
	}

	function handleSubmit() {
	  emits('close', rentalPeriod)
	}
</script>

<template>
  <ModalBase :isOpen="isOpen">
    <div class="h-fit w-fit rounded-md flex flex-col bg-white overflow-hidden">
      <header
        class="w-full flex-1 p-5 flex items-center justify-between bg-zinc-800 text-white text-md"
      >
        <strong>Select rental period</strong>

        <button @click="emits('close')">
          <PhX class="text-zinc-500 text-2xl" />
        </button>
      </header>
      <div
        class="h-[300] w-[600px] mb:w-[350px] flex mb:flex-col items-center justify-center p-1"
      >
        <div
				  id="calendar__wrapper"
					class="mb:w-full md:w-[350px]"
				>
				  <Datepicker
					  class="w-full flex justify-center"
					  range
						inline
						:minDate="new Date()"
						:modelValue="rentalPeriod"
						@update:modelValue="handleSelectRentalPeriod"
						:hideNavigation="['time']"
						:previewFormat="()=>null"
					/>
        </div>

        <div
          class="flex flex-col mb:full md:min-h-[300px] min-w-[250px] mb:w-full mb:h-[250px] items-start mb:gap-10 md:justify-between mb:px-5 p-10"
        >
          <div class="w-full flex mb:justify-start gap-6 md:flex-col">
            <p
              class="text-xs text-zinc-400 font-regular text-left leading-normal"
            >
              FROM

              <strong
							  v-if="rentalPeriod[0]"
								class="block mt-1 text-zinc-700 text-xl"
							>
                {{formatDate(rentalPeriod[0].toISOString())}}
              </strong>
            </p>

            <p
              class="text-xs text-zinc-400 font-regular text-left leading-normal"
            >
              TO

              <strong
							  v-if="rentalPeriod[1]"
								class="block mt-1 text-zinc-700 text-xl"
							>
                {{formatDate(rentalPeriod[1].toISOString())}}
              </strong>
            </p>
          </div>

          <button
            class="mx-auto p-3 w-full bg-red-500 text-zinc-100 text-md font-semibold"
						@click="handleSubmit"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  </ModalBase>
</template>

<style>
  .vc-container {
    border-width: 0;
  }

	.dp__theme_light, .dp__theme_dark {
	  --dp-border-color: transparent;
		--dp-menu-border-color: transparent;
		--dp-border-color-hover: transparent;
	}
</style>
