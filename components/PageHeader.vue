<script setup lang="ts">
import { useI18n } from 'vue-i18n';

// Define props for the component
interface Props {
  titleKey: string;       // i18n key for the page title
  descriptionKey?: string; // optional i18n key for the page description
}

const props = withDefaults(defineProps<Props>(), {
  descriptionKey: ''
});

// Get i18n translation function
const { t } = useI18n();
</script>

<template>
  <section class="bg-primary-50 dark:bg-primary-900 py-16">
    <div class="container mx-auto px-8">
      <h1 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">{{ t(props.titleKey) }}</h1>
      <div class="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
      <p v-if="props.descriptionKey" class="text-lg text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
        {{ t(props.descriptionKey) }}
      </p>
    </div>
  </section>
</template>