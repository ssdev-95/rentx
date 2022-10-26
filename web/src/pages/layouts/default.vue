<script setup lang="ts">
  import Header from '../../components/header.vue'
	import Indicator from '../../components/indicator.vue'
</script>

<template>
  <main class="min-h-screen w-screen flex flex-col items-center justify-center">
	  <Header>
		  <strong class="text-zinc-800">RentX</strong>

			<strong class="text-zinc-800">signin</strong>
		</Header>

		<div class="flex-1 flex w-full">
		  <Indicator active="car" />
		  <slot></slot>
		</div>
	</main>
</template>
