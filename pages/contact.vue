<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useHead } from '#imports';

const { t } = useI18n();

useHead({
  title: t('contact.title') + ' - ' + t('hero.fullName')
});

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);
const errorMessage = ref('');

const submitForm = async () => {
  // Reset states
  isSubmitting.value = true;
  errorMessage.value = '';
  
  try {
    // In a real implementation, you would send the form data to your backend
    // For now, we'll simulate a successful submission after a short delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    isSubmitted.value = true;
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  } catch (error) {
    errorMessage.value = t('contact.error.submission');
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div>
    <!-- Header -->
    <section class="bg-primary-50 dark:bg-primary-900 py-16">
      <div class="container mx-auto px-8">
        <h1 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">{{ t('contact.title') }}</h1>
        <div class="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
        <p class="text-lg text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          {{ t('contact.intro') }}
        </p>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="py-16 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div class="container mx-auto px-8">
        <div class="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(var(--primary-500-rgb),0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(var(--primary-500-rgb),0.2)] transition-shadow duration-300">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            <!-- Contact Information -->
            <div class="md:col-span-1">
              <div class="bg-primary-50 dark:bg-primary-900/50 p-6 rounded-lg">
                <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">{{ t('contact.contactInfo.title') }}</h2>
                
                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center">
                      <svg class="h-5 w-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div class="ml-4 flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 dark:text-white">{{ t('contact.contactInfo.emailLabel') }}</p>
                      <a href="mailto:chiranjeeb.gogoi@gmail.com" class="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 break-all">
                        chiranjeeb.gogoi@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center">
                      <svg class="h-5 w-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-gray-900 dark:text-white">{{ t('contact.contactInfo.phoneLabel') }}</p>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        {{ t('contact.contactInfo.phone') }}
                      </p>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center">
                      <svg class="h-5 w-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-gray-900 dark:text-white">{{ t('contact.contactInfo.locationLabel') }}</p>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        {{ t('contact.contactInfo.location') }}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div class="mt-8">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">{{ t('contact.connect.title') }}</h3>
                  <div class="flex justify-center space-x-4">
                    <a href="https://github.com/Chiran-git" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                      <span class="sr-only">{{ t('contact.connect.socialLinks.github') }}</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/chiranjeeb-gogoi-97b533a8 " target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                      <span class="sr-only">{{ t('contact.connect.socialLinks.linkedin') }}</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Contact Form -->
            <div class="md:col-span-2">
              <div v-if="isSubmitted" class="bg-green-50 p-6 rounded-lg">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <svg class="h-8 w-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-green-800">{{ t('contact.success.title') }}</h3>
                    <p class="mt-2 text-sm text-green-700">
                      {{ t('contact.success.description') }}
                    </p>
                    <button 
                      @click="isSubmitted = false" 
                      class="mt-4 btn bg-green-600 hover:bg-green-700 text-white"
                    >
                      {{ t('contact.success.sendAnother') }}
                    </button>
                  </div>
                </div>
              </div>
              
              <form v-else @submit.prevent="submitForm" class="space-y-6">
                <div v-if="errorMessage" class="bg-red-50 p-4 rounded-md">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <svg class="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-red-800">{{ errorMessage }}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{ t('contact.form.name') }}</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    required
                    class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                  />
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{ t('contact.email') }}</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    required
                    class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                  />
                </div>
                
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{ t('contact.form.subject') }}</label>
                  <input 
                    type="text" 
                    id="subject" 
                    v-model="form.subject" 
                    required
                    class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                  />
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{ t('contact.message') }}</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    v-model="form.message" 
                    required
                    class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    class="w-full btn btn-primary flex justify-center items-center"
                    :disabled="isSubmitting"
                  >
                    <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {{ isSubmitting ? t('contact.form.sending') : t('contact.send') }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>