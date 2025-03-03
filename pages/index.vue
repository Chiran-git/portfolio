<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useHead } from "#imports";

// Import the image directly
import heroImage from "~/assets/images/hero.jpg";
const { t } = useI18n();

useHead({
  title: t("hero.fullName") + " - " + t("hero.title"),
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 bg-cover"
      :style="`background-image: url(${heroImage}); background-position: center 56%;`">
      <!-- Overlay for better text readability -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="container mx-auto px-8 relative z-10">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-2/3 lg:w-1/2 mb-8 md:mb-0 text-white">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
              <span class="block text-white">{{ t("hero.greeting") }}</span>
              <span class="text-primary-300">{{ t("hero.fullName") }}</span>
            </h1>
            <h2 class="text-2xl md:text-3xl text-gray-200 mb-6">
              {{ t("hero.title") }}
            </h2>
            <p class="text-lg text-gray-200 mb-8">
              {{ t("hero.summary") }}
            </p>
            <div class="flex space-x-4">
              <NuxtLink to="/projects" class="btn btn-primary">
                {{ t("nav.projects") }}
              </NuxtLink>
              <NuxtLink to="/contact"
                class="btn bg-white text-primary-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-primary-400 dark:hover:bg-gray-700">
                {{ t("nav.contact") }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Summary Section -->
    <section class="py-16 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div class="container mx-auto px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {{ t("professional.title") }}
          </h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        <div class="max-w-4xl mx-auto">
          <ul class="space-y-6">
            <li class="flex items-start space-x-4">
              <span class="text-primary-500">●</span>
              <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                {{ t('professional.summary.1') }}
              </p>
            </li>
            <li class="flex items-start space-x-4">
              <span class="text-primary-500">●</span>
              <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                {{ t('professional.summary.2') }}
              </p>
            </li>
            <li class="flex items-start space-x-4">
              <span class="text-primary-500">●</span>
              <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                {{ t('professional.summary.3') }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Skills Preview Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div class="container mx-auto px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {{ t("skills.title") }}
          </h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Backend Skills -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-primary-500">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {{ t("skills.backend") }}
            </h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700 dark:text-gray-300">{{
                  t("skills.technologies.laravel")
                }}</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700 dark:text-gray-300">{{
                  t("skills.technologies.php")
                }}</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700 dark:text-gray-300">{{
                  t("skills.technologies.springboot")
                }}</span>
              </li>
            </ul>
            <NuxtLink to="/skills"
              class="mt-4 inline-block text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300">
              {{ t("skills.learnMore") }}
            </NuxtLink>
          </div>

          <!-- Frontend Skills -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-primary-500">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {{ t("skills.frontend") }}
            </h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700 dark:text-gray-300">{{
                  t("skills.technologies.vuejs")
                }}</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700 dark:text-gray-300">{{
                  t("skills.technologies.javascript")
                }}</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700 dark:text-gray-300">{{
                  t("skills.technologies.htmlCss")
                }}</span>
              </li>
            </ul>
            <NuxtLink to="/skills"
              class="mt-4 inline-block text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300">
              {{ t("skills.learnMore") }}
            </NuxtLink>
          </div>

          <!-- Tools Skills -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-primary-500">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {{ t("skills.tools") }}
            </h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700 dark:text-gray-300">{{
                  t("skills.technologies.git")
                }}</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700 dark:text-gray-300">{{
                  t("skills.technologies.aws")
                }}</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700 dark:text-gray-300">{{
                  t("skills.technologies.jira")
                }}</span>
              </li>
            </ul>
            <NuxtLink to="/skills"
              class="mt-4 inline-block text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300">
              {{ t("skills.learnMore") }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-primary-600 text-white">
      <div class="container mx-auto px-8 text-center">
        <h2 class="text-3xl font-bold mb-4 text-white">
          {{ t("contact.title") }}
        </h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto text-gray-100">
          {{ t("contact.cta") }}
        </p>
        <NuxtLink to="/contact"
          class="btn bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700">
          {{ t("contact.title") }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
