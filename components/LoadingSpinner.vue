<template>
  <div v-if="loading" class="fixed inset-0 flex items-center justify-center bg-white/75 dark:bg-gray-900/75 z-50">
    <div class="relative">
      <!-- First cog -->
      <svg class="animate-spin h-12 w-12 text-primary absolute" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm9 3h-1.7c-.2-.8-.4-1.6-.9-2.3l1.2-1.2c.4-.4.4-1 0-1.4l-1.4-1.4c-.4-.4-1-.4-1.4 0l-1.2 1.2c-.7-.5-1.5-.7-2.3-.9V3c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v1.7c-.8.2-1.6.4-2.3.9L6.8 4.4c-.4-.4-1-.4-1.4 0L4 5.8c-.4.4-.4 1 0 1.4l1.2 1.2c-.5.7-.7 1.5-.9 2.3H3c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h1.7c.2.8.4 1.6.9 2.3l-1.2 1.2c-.4.4-.4 1 0 1.4l1.4 1.4c.4.4 1 .4 1.4 0l1.2-1.2c.7.5 1.5.7 2.3.9V21c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1.7c.8-.2 1.6-.4 2.3-.9l1.2 1.2c.4.4 1 .4 1.4 0l1.4-1.4c.4-.4.4-1 0-1.4l-1.2-1.2c.5-.7.7-1.5.9-2.3H21c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1zm-9 5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
      </svg>
      <!-- Second cog -->
      <svg class="animate-spin h-8 w-8 text-primary absolute -right-4 top-8" style="animation-direction: reverse;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm9 3h-1.7c-.2-.8-.4-1.6-.9-2.3l1.2-1.2c.4-.4.4-1 0-1.4l-1.4-1.4c-.4-.4-1-.4-1.4 0l-1.2 1.2c-.7-.5-1.5-.7-2.3-.9V3c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v1.7c-.8.2-1.6.4-2.3.9L6.8 4.4c-.4-.4-1-.4-1.4 0L4 5.8c-.4.4-.4 1 0 1.4l1.2 1.2c-.5.7-.7 1.5-.9 2.3H3c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h1.7c.2.8.4 1.6.9 2.3l-1.2 1.2c-.4.4-.4 1 0 1.4l1.4 1.4c.4.4 1 .4 1.4 0l1.2-1.2c.7.5 1.5.7 2.3.9V21c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1.7c.8-.2 1.6-.4 2.3-.9l1.2 1.2c.4.4 1 .4 1.4 0l1.4-1.4c.4-.4.4-1 0-1.4l-1.2-1.2c.5-.7.7-1.5.9-2.3H21c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1zm-9 5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
      </svg>
    </div>
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