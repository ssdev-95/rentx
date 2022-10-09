<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
	import { useShowroomStore } from './composables/stores/showroom'

	const store = useShowroomStore()

	onMounted(() => {
  	store.fetchShowroom()
	})
</script>

<style></style>
