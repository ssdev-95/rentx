<script setup lang="ts">
 const { classname, thumb } = defineProps<{ classname:string,thumb:string }>()
</script>

<template>
  <div
	  class="w-16 h-16 rounded-full p-1 animate-spin"
		:class="classname"
	>
	  <div
		  class="w-full h-full rounded-full"
			:class="thumb"
		/>
	</div>
</template>
