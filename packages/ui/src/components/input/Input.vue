<script setup lang="ts">
import type { InputProps } from './props'

defineProps<InputProps>()
const modelValue = defineModel()
</script>

<template>
  <input
    v-model="modelValue"
    class="border-green-500 border-1 border-solid p-2 outline-none rounded-md focus :border-blue-500"
    :type="type"
    :placeholder="placeholder"
  >
</template>
