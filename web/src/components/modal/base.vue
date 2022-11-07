<script setup lang="ts">
  const { isOpen } = defineProps<{ isOpen:boolean }>()
</script>

<template>
  <div
	  v-if="isOpen"
		class="fixed top-0 left-0 h-screen w-screen bg-black/70 flex items-center justify-center z-40"
	>
	  <slot></slot>
	</div>
</template>
