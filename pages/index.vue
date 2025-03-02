<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useHead } from '#imports';

// Import the image directly
import heroImage from '~/assets/images/hero.jpg';
const { t } = useI18n();

useHead({
  title: t('hero.fullName') + ' - ' + t('hero.title')
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section 
      class="relative py-20 bg-cover" 
      :style="`background-image: url(${heroImage}); background-position: center 56%;`"
    >
      <!-- Overlay for better text readability -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="container mx-auto px-8 relative z-10">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-2/3 lg:w-1/2 mb-8 md:mb-0 text-white">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
              <span class="block text-white">{{ t('hero.greeting') }}</span>
              <span class="text-primary-300">{{ t('hero.fullName') }}</span>
            </h1>
            <h2 class="text-2xl md:text-3xl text-gray-200 mb-6">{{ t('hero.title') }}</h2>
            <p class="text-lg text-gray-200 mb-8">
              {{ t('hero.summary') }}
            </p>
            <div class="flex space-x-4">
              <NuxtLink to="/projects" class="btn btn-primary">
                {{ t('nav.projects') }}
              </NuxtLink>
              <NuxtLink to="/contact" class="btn bg-white text-primary-600 hover:bg-gray-100">
                {{ t('nav.contact') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Summary Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ t('hero.title') }}</h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        <div class="max-w-4xl mx-auto">
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t('hero.summary') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Skills Preview Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ t('skills.title') }}</h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Backend Skills -->
          <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-500">
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ t('skills.backend') }}</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ t('skills.technologies.laravel') }}
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ t('skills.technologies.php') }}
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ t('skills.technologies.mysql') }}
              </li>
            </ul>
            <NuxtLink to="/skills" class="mt-4 inline-block text-primary-600 hover:text-primary-800">
              {{ t('skills.learnMore') }}
            </NuxtLink>
          </div>
          
          <!-- Frontend Skills -->
          <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-500">
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ t('skills.frontend') }}</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ t('skills.technologies.vuejs') }}
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ t('skills.technologies.javascript') }}
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ t('skills.technologies.htmlCss') }}
              </li>
            </ul>
            <NuxtLink to="/skills" class="mt-4 inline-block text-primary-600 hover:text-primary-800">
              {{ t('skills.learnMore') }}
            </NuxtLink>
          </div>
          
          <!-- Tools Skills -->
          <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-500">
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ t('skills.tools') }}</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ t('skills.technologies.git') }}
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ t('skills.technologies.aws') }}
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ t('skills.technologies.jira') }}
              </li>
            </ul>
            <NuxtLink to="/skills" class="mt-4 inline-block text-primary-600 hover:text-primary-800">
              {{ t('skills.learnMore') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-primary-600 text-white">
      <div class="container mx-auto px-8 text-center">
        <h2 class="text-3xl font-bold mb-4">{{ t('contact.title') }}</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">
          {{ t('contact.cta') }}
        </p>
        <NuxtLink to="/contact" class="btn bg-white text-primary-600 hover:bg-gray-100">
          {{ t('contact.title') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>