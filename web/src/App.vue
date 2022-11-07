<template>
	<router-view></router-view>
</template>

<script setup lang="ts">
  import { onMounted, onBeforeMount } from 'vue'

  import { useShowroomStore } from './composables/stores/showroom'
  import { useAuthStore } from './composables/stores/auth'
	import { useRentStore } from './composables/stores/rents'


  onMounted(() => {
    useShowroomStore().fetchShowroom()
		const token = localStorage.getItem('@rentx:token')

		if(useAuthStore().getUser && token) {
		  useRentStore().fetchRents(token)
		}
  })

  onBeforeMount(() => {
    const storedUser = localStorage.getItem('@rentx:user')

    if (!storedUser) {
      console.log(storedUser)
      return
    }

    useAuthStore().saveUser(JSON.parse(storedUser))
  })
</script>
