<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import { useHead } from '#imports';

const { t } = useI18n();

useHead({
  title: t('projects.title') + ' - ' + t('hero.fullName')
});

const projects = [
  {
    id: 1,
    name: 'RosterBuster',
    description: 'An airline crew scheduling application for parsing rosters and providing notifications to flight crew members.',
    technologies: ['Laravel', 'MySQL', 'AWS S3', 'CloudWatch', 'Vue.js'],
    role: 'Full Stack Developer',
    image: '/images/projects/rosterbuster.jpg',
    features: [
      'Implemented a robust parsing system for various airline roster formats',
      'Built a real-time notification system for schedule changes',
      'Developed a responsive UI for mobile and desktop devices',
      'Integrated with various airline APIs for live flight data'
    ]
  },
  {
    id: 2,
    name: 'Surbo Chat',
    description: 'A real-time messaging platform with advanced features for team collaboration.',
    technologies: ['Laravel', 'MySQL', 'Laravel Echo Server', 'Redis', 'MongoDB'],
    role: 'Backend Developer',
    image: '/images/projects/surbo.jpg',
    features: [
      'Built a scalable backend architecture for handling thousands of concurrent users',
      'Implemented real-time messaging using WebSockets',
      'Developed APIs for mobile and web applications',
      'Designed a caching strategy that improved performance by 40%'
    ]
  },
  {
    id: 3,
    name: 'Empeq POC',
    description: 'A financial platform for managing organizational funds and assets with detailed analytics.',
    technologies: ['Laravel', 'MySQL', 'Vue.js'],
    role: 'Full Stack Developer',
    image: '/images/projects/empeq.jpg',
    features: [
      'Developed a comprehensive financial dashboard with real-time analytics',
      'Implemented secure authentication and authorization systems',
      'Built custom reporting tools for financial data visualization',
      'Integrated with multiple payment gateways and financial services'
    ]
  }
];

const selectedProject = ref(null);

const showProjectDetails = (project) => {
  selectedProject.value = project;
};

const closeProjectDetails = () => {
  selectedProject.value = null;
};
</script>

<template>
  <div>
    <!-- Header -->
    <section class="bg-primary-50 dark:bg-primary-900 py-16">
      <div class="container mx-auto px-8">
        <h1 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">{{ t('projects.title') }}</h1>
        <div class="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
        <p class="text-lg text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Throughout my career, I've worked on various projects, from enterprise applications to scalable web platforms. Here are some highlights from my work.
        </p>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-16 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div class="container mx-auto px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.id" 
              class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              @click="showProjectDetails(project)">
            <div class="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <!-- Use an actual image in production -->
              <svg class="w-24 h-24 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ project.name }}</h3>
              <p class="text-gray-700 dark:text-gray-400 mb-4 line-clamp-2">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="(tech, index) in project.technologies.slice(0, 3)" :key="index" class="bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-400 px-2 py-1 rounded-full text-xs">
                  {{ tech }}
                </span>
                <span v-if="project.technologies.length > 3" class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400 px-2 py-1 rounded-full text-xs">
                  +{{ project.technologies.length - 3 }} more
                </span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500 dark:text-gray-400">{{ t('projects.role') }}: {{ project.role }}</span>
                <button class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <div v-if="selectedProject" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div class="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-200">
        <div class="p-6">
          <div class="flex justify-between items-start mb-6">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ selectedProject.name }}</h2>
            <button @click="closeProjectDetails" class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div class="mb-6 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <!-- Replace with actual project image -->
            <svg class="w-24 h-24 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
            </svg>
          </div>
          
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Description</h3>
            <p class="text-gray-700 dark:text-gray-300">{{ selectedProject.description }}</p>
          </div>
          
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key Features</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li v-for="(feature, index) in selectedProject.features" :key="index" class="text-gray-700 dark:text-gray-300">
                {{ feature }}
              </li>
            </ul>
          </div>
          
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ t('projects.technologies') }}</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="(tech, index) in selectedProject.technologies" :key="index" class="bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-400 px-3 py-1 rounded-full text-sm">
                {{ tech }}
              </span>
            </div>
          </div>
          
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ t('projects.role') }}</h3>
            <p class="text-gray-700 dark:text-gray-300">{{ selectedProject.role }}</p>
          </div>
          
          <div class="flex justify-end">
            <button @click="closeProjectDetails" class="btn btn-primary">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <section class="py-16 bg-primary-50 dark:bg-primary-900 transition-colors duration-200">
      <div class="container mx-auto px-8 text-center">
        <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Interested in working together?</h2>
        <p class="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          I'm always open to discussing new projects and opportunities. Feel free to reach out!
        </p>
        <NuxtLink to="/contact" class="btn btn-primary">
          {{ t('nav.contact') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>