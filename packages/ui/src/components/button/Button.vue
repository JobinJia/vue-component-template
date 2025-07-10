<script setup lang="ts">
const { type = 'primary' } = defineProps<{
  type: 'primary' | 'secondary' | 'tertiary' | 'link'
}>()
</script>

<template>
  <button :class="type" class="button">
    <slot />
  </button>
</template>
