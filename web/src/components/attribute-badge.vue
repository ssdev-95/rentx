<script setup lang="ts">
  const { label } = defineProps<{ label: string }>()
</script>

<template>
  <div class="flex gap-1">
    <div class="bg-zinc-200 p-3 flex items-center justify-center">
      <slot></slot>
    </div>

    <div class="bg-zinc-200 p-3 flex-1 flex items-center justify-start">
      <span class="text-zinc-700">
        {{ label }}
      </span>
    </div>
  </div>
</template>
