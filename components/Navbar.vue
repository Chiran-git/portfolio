<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n, useLocalePath, useRoute, navigateTo } from '#imports';

type LocaleType = 'en' | 'hi' | 'as';
type LocaleOption = { code: LocaleType; name: string };

const { t, locale } = useI18n<{ messages: any }>();
const localePath = useLocalePath();
const route = useRoute();
const isMenuOpen = ref(false);

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
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink :to="localePath('/')" class="text-primary-600 font-bold text-xl">Chiranjeeb</NuxtLink>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-4">
          <NuxtLink :to="localePath('/')" 
            class="px-3 py-2 hover:text-primary-600"
            :class="isActive('/') ? 'text-primary-600' : 'text-gray-700'">
            {{ t('nav.home') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/skills')" 
            class="px-3 py-2 hover:text-primary-600"
            :class="isActive('/skills') ? 'text-primary-600' : 'text-gray-700'">
            {{ t('nav.skills') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/experience')" 
            class="px-3 py-2 hover:text-primary-600"
            :class="isActive('/experience') ? 'text-primary-600' : 'text-gray-700'">
            {{ t('nav.experience') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/education')" 
            class="px-3 py-2 hover:text-primary-600"
            :class="isActive('/education') ? 'text-primary-600' : 'text-gray-700'">
            {{ t('nav.education') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/projects')" 
            class="px-3 py-2 hover:text-primary-600"
            :class="isActive('/projects') ? 'text-primary-600' : 'text-gray-700'">
            {{ t('nav.projects') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/contact')" 
            class="px-3 py-2 hover:text-primary-600"
            :class="isActive('/contact') ? 'text-primary-600' : 'text-gray-700'">
            {{ t('nav.contact') }}
          </NuxtLink>
          
          <!-- Language Switcher -->
          <div class="relative ml-3">
            <button
              type="button"
              class="px-3 py-2 text-gray-700 hover:text-primary-600 flex items-center"
              @click="toggleMenu"
            >
              <span>{{ availableLocales.find((l: LocaleOption) => l.code === locale)?.name || locale }}</span>
              <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div
              v-if="isMenuOpen"
              class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
            >
              <button
                v-for="lang in availableLocales"
                :key="lang.code"
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-primary-50"
                :class="{ 'bg-primary-50': lang.code === locale }"
                @click="setLocale(lang.code)"
              >
                {{ lang.name }}
              </button>
            </div>
          </div>
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="flex md:hidden">
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600"
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
          class="block pl-3 pr-4 py-2 text-base font-medium hover:text-primary-600 hover:bg-primary-50" 
          :class="isActive('/') ? 'text-primary-600 bg-primary-50' : 'text-gray-700'"
          @click="closeMenu">
          {{ t('nav.home') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/skills')" 
          class="block pl-3 pr-4 py-2 text-base font-medium hover:text-primary-600 hover:bg-primary-50" 
          :class="isActive('/skills') ? 'text-primary-600 bg-primary-50' : 'text-gray-700'"
          @click="closeMenu">
          {{ t('nav.skills') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/experience')" 
          class="block pl-3 pr-4 py-2 text-base font-medium hover:text-primary-600 hover:bg-primary-50" 
          :class="isActive('/experience') ? 'text-primary-600 bg-primary-50' : 'text-gray-700'"
          @click="closeMenu">
          {{ t('nav.experience') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/education')" 
          class="block pl-3 pr-4 py-2 text-base font-medium hover:text-primary-600 hover:bg-primary-50" 
          :class="isActive('/education') ? 'text-primary-600 bg-primary-50' : 'text-gray-700'"
          @click="closeMenu">
          {{ t('nav.education') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/projects')" 
          class="block pl-3 pr-4 py-2 text-base font-medium hover:text-primary-600 hover:bg-primary-50" 
          :class="isActive('/projects') ? 'text-primary-600 bg-primary-50' : 'text-gray-700'"
          @click="closeMenu">
          {{ t('nav.projects') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/contact')" 
          class="block pl-3 pr-4 py-2 text-base font-medium hover:text-primary-600 hover:bg-primary-50" 
          :class="isActive('/contact') ? 'text-primary-600 bg-primary-50' : 'text-gray-700'"
          @click="closeMenu">
          {{ t('nav.contact') }}
        </NuxtLink>
        
        <!-- Language Switcher (Mobile) -->
        <div class="px-3 py-2">
          <div class="font-medium text-gray-700 mb-1">{{ t('languages.title') }}:</div>
          <div class="space-y-1">
            <button
              v-for="lang in availableLocales"
              :key="lang.code"
              class="block w-full text-left px-2 py-1 text-sm text-gray-700 hover:bg-primary-50 rounded"
              :class="{ 'bg-primary-50': lang.code === locale }"
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