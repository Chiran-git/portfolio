<template>
  <div v-if="loading" class="fixed inset-0 flex items-center justify-center bg-white/75 dark:bg-gray-900/75 z-50">
    <svg class="animate-spin h-12 w-12 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const loading = ref(false)

// Create a composable to control loading state
const useLoading = () => {
  const start = () => {
    console.log('Loading started')
    loading.value = true
  }
  const finish = () => {
    console.log('Loading finished')
    loading.value = false
  }
  return { start, finish }
}

// Watch loading state changes
watch(loading, (newVal) => {
  console.log('Loading state changed:', newVal)
})

defineExpose({ useLoading })
</script>