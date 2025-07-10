<script setup lang="ts">
const modelValue = defineModel()
</script>

<template>
  <input v-model="modelValue" class="border-red-500 border-1 border-solid p-2" type="text">
</template>
