<script setup lang="ts">
  import { PhPower } from 'phosphor-vue'

  import Header from '../components/header.vue'
  import Indicator from '../components/indicator.vue'

  import { authStore } from '../composables/stores/auth'
  const store = authStore()

  function logout() {
    store.removeUser()
  }
</script>

<template>
  <main>
    <Header>
      <strong>Profile</strong>

      <button @click="store.removeUser">
        <PhPower />
      </button>
    </Header>

    <div>
      <Indicator active="user" />
      <div>
        <div>
          <img :src="store.getUser.avatar" alt="" />
        </div>
        <div></div>
      </div>
    </div>
  </main>
</template>
