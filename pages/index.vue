<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-primary-50 to-white py-20">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
              <span class="block text-gray-700">{{ t('hero.greeting') }}</span>
              <span class="text-primary-600">Chiranjeeb Gogoi</span>
            </h1>
            <h2 class="text-2xl md:text-3xl text-gray-700 mb-6">{{ t('hero.title') }}</h2>
            <p class="text-lg text-gray-600 mb-8">
              {{ t('hero.summary') }}
            </p>
            <div class="flex space-x-4">
              <NuxtLink to="/projects" class="btn btn-primary">
                {{ t('nav.projects') }}
              </NuxtLink>
              <NuxtLink to="/contact" class="btn btn-outline">
                {{ t('nav.contact') }}
              </NuxtLink>
            </div>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <div class="bg-white p-2 rounded-full shadow-xl">
              <div class="w-64 h-64 md:w-80 md:h-80 bg-primary-100 rounded-full flex items-center justify-center">
                <!-- Replace with your photo -->
                <svg class="w-32 h-32 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Summary Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
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
      <div class="container mx-auto px-4">
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
                Laravel
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                PHP
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                MySQL
              </li>
            </ul>
            <NuxtLink to="/skills" class="mt-4 inline-block text-primary-600 hover:text-primary-800">
              Learn More →
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
                Vue.js
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                JavaScript
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                HTML/CSS
              </li>
            </ul>
            <NuxtLink to="/skills" class="mt-4 inline-block text-primary-600 hover:text-primary-800">
              Learn More →
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
                Git
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                AWS
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Jira
              </li>
            </ul>
            <NuxtLink to="/skills" class="mt-4 inline-block text-primary-600 hover:text-primary-800">
              Learn More →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-primary-600 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">{{ t('contact.title') }}</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">
          Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
        </p>
        <NuxtLink to="/contact" class="btn bg-white text-primary-600 hover:bg-gray-100">
          {{ t('contact.title') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>