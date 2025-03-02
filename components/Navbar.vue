<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n, useLocalePath, useRoute, navigateTo, useColorMode } from '#imports';

type LocaleType = 'en' | 'hi' | 'as';
type LocaleOption = { code: LocaleType; name: string };

const { t, locale } = useI18n<{ messages: any }>();
const localePath = useLocalePath();
const route = useRoute();
const isMenuOpen = ref(false);
const colorMode = useColorMode();

const isDark = computed(() => colorMode.value === 'dark');

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

const availableLocales = computed<LocaleOption[]>(() => ([
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'as', name: 'অসমীয়া' }
]));

const isActive = (path: string) => {
  const currentPath = route.path.replace(/\/$/, '');
  const checkPath = localePath(path).replace(/\/$/, '');
  return currentPath === checkPath;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const setLocale = async (loc: LocaleType) => {
  const route = useRoute();
  locale.value = loc;
  await navigateTo(localePath(route.fullPath));
  closeMenu();
};
</script>

<template>
  <nav class="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-200">
    <div class="container mx-auto px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink :to="localePath('/')" class="text-primary-600 dark:text-primary-400 font-bold text-xl">Chiranjeeb</NuxtLink>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-4">
          <NuxtLink :to="localePath('/')" 
            class="px-3 py-2 hover:text-primary-600 dark:hover:text-primary-400"
            :class="isActive('/') ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'">
            {{ t('nav.home') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/skills')" 
            class="px-3 py-2 hover:text-primary-600 dark:hover:text-primary-400"
            :class="isActive('/skills') ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'">
            {{ t('nav.skills') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/experience')" 
            class="px-3 py-2 hover:text-primary-600 dark:hover:text-primary-400"
            :class="isActive('/experience') ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'">
            {{ t('nav.experience') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/education')" 
            class="px-3 py-2 hover:text-primary-600 dark:hover:text-primary-400"
            :class="isActive('/education') ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'">
            {{ t('nav.education') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/projects')" 
            class="px-3 py-2 hover:text-primary-600 dark:hover:text-primary-400"
            :class="isActive('/projects') ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'">
            {{ t('nav.projects') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/contact')" 
            class="px-3 py-2 hover:text-primary-600 dark:hover:text-primary-400"
            :class="isActive('/contact') ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'">
            {{ t('nav.contact') }}
          </NuxtLink>
          
          <!-- Language Switcher -->
          <div class="relative">
            <button
              type="button"
              class="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 flex items-center"
              @click="toggleMenu"
            >
              <span>{{ availableLocales.find((l: LocaleOption) => l.code === locale)?.name || locale }}</span>
              <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div
              v-if="isMenuOpen"
              class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1"
            >
              <button
                v-for="lang in availableLocales"
                :key="lang.code"
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700"
                :class="{ 'bg-primary-50 dark:bg-gray-700': lang.code === locale }"
                @click="setLocale(lang.code)"
              >
                {{ lang.name }}
              </button>
            </div>
          </div>

          <!-- Theme Toggle for Desktop (Moved to end) -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            :aria-label="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          >
            <div class="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-[50px] px-1">
              <div class="w-4 h-4 rounded-[50px] bg-secondary-400 transform transition-transform duration-200"
                :class="isDark ? 'translate-x-6' : 'translate-x-0'"></div>
            </div>
          </button>
        </div>
        
        <!-- Mobile Menu Button and Theme Toggle -->
        <div class="flex md:hidden items-center">
          <!-- Theme Toggle for Mobile (Stays at start) -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 mr-2"
            :aria-label="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          >
            <div class="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-[50px] px-1">
              <div class="w-4 h-4 rounded-[50px] bg-secondary-400 transform transition-transform duration-200"
                :class="isDark ? 'translate-x-6' : 'translate-x-0'"></div>
            </div>
          </button>

          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <svg
              class="h-6 w-6"
              :class="{ 'hidden': isMenuOpen, 'block': !isMenuOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              class="h-6 w-6"
              :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" class="md:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <NuxtLink :to="localePath('/')" 
          class="block pl-3 pr-4 py-2 text-base font-medium hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700" 
          :class="isActive('/') ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-gray-700' : 'text-gray-700 dark:text-gray-300'"
          @click="closeMenu">
          {{ t('nav.home') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/skills')" 
          class="block pl-3 pr-4 py-2 text-base font-medium hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700" 
          :class="isActive('/skills') ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-gray-700' : 'text-gray-700 dark:text-gray-300'"
          @click="closeMenu">
          {{ t('nav.skills') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/experience')" 
          class="block pl-3 pr-4 py-2 text-base font-medium hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700" 
          :class="isActive('/experience') ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-gray-700' : 'text-gray-700 dark:text-gray-300'"
          @click="closeMenu">
          {{ t('nav.experience') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/education')" 
          class="block pl-3 pr-4 py-2 text-base font-medium hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700" 
          :class="isActive('/education') ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-gray-700' : 'text-gray-700 dark:text-gray-300'"
          @click="closeMenu">
          {{ t('nav.education') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/projects')" 
          class="block pl-3 pr-4 py-2 text-base font-medium hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700" 
          :class="isActive('/projects') ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-gray-700' : 'text-gray-700 dark:text-gray-300'"
          @click="closeMenu">
          {{ t('nav.projects') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/contact')" 
          class="block pl-3 pr-4 py-2 text-base font-medium hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700" 
          :class="isActive('/contact') ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-gray-700' : 'text-gray-700 dark:text-gray-300'"
          @click="closeMenu">
          {{ t('nav.contact') }}
        </NuxtLink>
        
        <!-- Language Switcher (Mobile) -->
        <div class="px-3 py-2">
          <div class="font-medium text-gray-700 dark:text-gray-300 mb-1">{{ t('languages.title') }}:</div>
          <div class="space-y-1">
            <button
              v-for="lang in availableLocales"
              :key="lang.code"
              class="block w-full text-left px-2 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 rounded"
              :class="{ 'bg-primary-50 dark:bg-gray-700': lang.code === locale }"
              @click="setLocale(lang.code)"
            >
              {{ lang.name }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>