<template>
  <div>
    <LoadingSpinner ref="loadingSpinner" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const loadingSpinner = ref()

onMounted(() => {
  const router = useRouter()

  router.beforeResolve((to, from, next) => {
    console.log('Navigation started:', to.path)
    loadingSpinner.value?.useLoading().start()
    next()
  })

  router.afterEach((to) => {
    console.log('Navigation completed:', to.path)
    loadingSpinner.value?.useLoading().finish();
  })
})
</script>
