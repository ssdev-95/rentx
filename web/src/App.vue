<template>
	<router-view></router-view>
</template>

<script setup lang="ts">
  import { onMounted, onBeforeMount } from 'vue'

  import { useShowroomStore } from './composables/stores/showroom'
  import { useAuthStore } from './composables/stores/auth'


  onMounted(() => {
    useShowroomStore().fetchShowroom()
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
