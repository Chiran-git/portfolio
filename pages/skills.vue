<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useHead } from '#imports';

const { t } = useI18n();

useHead({
  title: t('skills.title') + ' - ' + t('hero.fullName')
});

const backendSkills = [
  { name: 'Laravel', level: 90 },
  { name: 'PHP', level: 95 },
  { name: 'MySQL', level: 85 },
  { name: 'MongoDB', level: 80 },
  { name: 'Redis', level: 75 },
  { name: 'Spring Boot', level: 50 },
  { name: 'Java', level: 50 }
];

const frontendSkills = [
  { name: 'Vue.js', level: 90 },
  { name: 'JavaScript', level: 88 },
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 85 }
];

const toolsSkills = [
  { name: 'Git', level: 90 },
  { name: 'Jira', level: 85 },
  { name: 'AWS', level: 75 },
  { name: 'Laravel Echo Server', level: 80 },
  { name: 'Laravel Horizon', level: 80 }
];

const testingSkills = [
  { name: 'PHP Unit Testing', level: 85 },
  { name: 'CI/CD Pipelines', level: 80 }
];

const otherSkills = [
  { name: 'NodeJs', level: 80 }
];
</script>

<template>
  <div>
    <!-- Header -->
    <section class="bg-primary-50 dark:bg-primary-900 py-16">
      <div class="container mx-auto px-8">
        <h1 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">{{ t('skills.title') }}</h1>
        <div class="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
        <p class="text-lg text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          {{ t('skills.experienceSummary') }}
        </p>
      </div>
    </section>

    <!-- Backend Skills -->
    <section class="py-12 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div class="container mx-auto px-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">{{ t('skills.backend') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-8">
            <div v-for="(skill, index) in backendSkills" :key="index" class="space-y-2">
              <div class="flex justify-between items-center">
                <span class="text-lg font-medium">{{ skill.name }}</span>
                <span class="text-sm text-gray-500">{{ skill.level }}%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div class="h-full bg-primary-300 rounded-full" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>
          <div class="bg-primary-50 dark:bg-gray-800 p-8 rounded-lg transition-colors duration-200">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">{{ t('skills.backendTitle') }}</h3>
            <p class="text-gray-700 dark:text-gray-300">
              {{ t('skills.backendDescription') }}
            </p>
            <ul class="mt-4 space-y-2">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>{{ t('skills.backendFeatures.api') }}</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>{{ t('skills.backendFeatures.dbOptimization') }}</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>{{ t('skills.backendFeatures.caching') }}</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>{{ t('skills.backendFeatures.auth') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Frontend Skills -->
    <section class="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div class="container mx-auto px-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">{{ t('skills.frontend') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md order-2 md:order-1 transition-colors duration-200">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">{{ t('skills.frontendTitle') }}</h3>
            <p class="text-gray-700 dark:text-gray-300">
              {{ t('skills.frontendDescription') }}
            </p>
            <ul class="mt-4 space-y-2">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>{{ t('skills.frontendFeatures.components') }}</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>{{ t('skills.frontendFeatures.responsive') }}</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>{{ t('skills.frontendFeatures.uiux') }}</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>{{ t('skills.frontendFeatures.apiIntegration') }}</span>
              </li>
            </ul>
          </div>
          <div class="space-y-8 order-1 md:order-2">
            <div v-for="(skill, index) in frontendSkills" :key="index" class="space-y-2">
              <div class="flex justify-between items-center">
                <span class="text-lg font-medium">{{ skill.name }}</span>
                <span class="text-sm text-gray-500">{{ skill.level }}%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div class="h-full bg-primary-300 rounded-full" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Other Skills -->
    <section class="py-12 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div class="container mx-auto px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Tools & Platforms -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{{ t('skills.tools') }}</h2>
            <div class="space-y-6">
              <div v-for="(skill, index) in toolsSkills" :key="index" class="space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-lg font-medium">{{ skill.name }}</span>
                </div>
                <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-primary-300 rounded-full" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
          <!-- Testing & Deployment -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{{ t('skills.testing') }}</h2>
            <div class="space-y-6">
              <div v-for="(skill, index) in testingSkills" :key="index" class="space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-lg font-medium">{{ skill.name }}</span>
                </div>
                <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-primary-300 rounded-full" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
          <!-- Others -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{{ t('skills.others') }}</h2>
            <div class="space-y-6">
              <div v-for="(skill, index) in otherSkills" :key="index" class="space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-lg font-medium">{{ skill.name }}</span>
                </div>
                <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-primary-300 rounded-full" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-primary-50 dark:bg-primary-900 transition-colors duration-200">
      <div class="container mx-auto px-8 text-center">
        <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{{ t('skills.ctaTitle') }}</h2>
        <p class="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          {{ t('skills.ctaDescription') }}
        </p>
        <div class="flex justify-center space-x-4">
          <NuxtLink to="/experience" class="btn btn-primary">
            {{ t('nav.experience') }}
          </NuxtLink>
          <NuxtLink to="/projects" class="btn btn-outline">
            {{ t('nav.projects') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>