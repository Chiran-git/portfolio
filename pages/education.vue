<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const educations = [
  {
    degree: 'Masters of Computer Application',
    institution: 'Girijananda Chowdhury Institute of Management and Technology, Gauhati University',
    duration: '2012 – 2015',
    description: 'Advanced studies in computer application with focus on software development, database management, and system analysis.'
  },
  {
    degree: 'Bachelor of Computer Application',
    institution: 'Sikkim Manipal University',
    duration: '2008 – 2011',
    description: 'Fundamental education in computer science covering programming, data structures, and system design.'
  },
  {
    degree: 'Higher Secondary (Science)',
    institution: 'Swadeshi Academy Junior College',
    duration: '2005 – 2007',
    description: 'Science stream with focus on Physics, Chemistry, and Mathematics.'
  },
  {
    degree: 'All India Senior Secondary Examination',
    institution: 'Guwahati Public School',
    duration: '1994 – 2004',
    description: 'Primary and secondary education with strong foundation in science and mathematics.'
  }
];

/*const certifications = [
  {
    title: 'Laravel Certification',
    issuer: 'Laravel',
    year: '2022',
    description: 'Advanced certification in Laravel framework and best practices'
  },
  {
    title: 'AWS Certified Developer Associate',
    issuer: 'Amazon Web Services',
    year: '2021',
    description: 'Certification for cloud application development and deployment'
  }
];*/

const certifications = [];
</script>

<template>
  <div>
    <!-- Header -->
    <section class="bg-primary-50 py-16">
      <div class="container mx-auto px-8">
        <h1 class="text-4xl font-bold text-center text-gray-900 mb-4">{{ t('education.title') }}</h1>
        <div class="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
        <p class="text-lg text-center text-gray-700 max-w-3xl mx-auto">
          A strong educational foundation combined with practical experience has shaped my technical expertise.
        </p>
      </div>
    </section>

    <!-- Education Timeline -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-10 text-center">Academic Background</h2>
        
        <div class="relative max-w-4xl mx-auto">
          <!-- Timeline line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-100"></div>
          
          <!-- Education items -->
          <div v-for="(edu, index) in educations" :key="index" 
               class="relative mb-16 last:mb-0">
            <div :class="[
              'flex flex-col items-center',
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            ]">
              <!-- Dot marker -->
              <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary-500 border-4 border-white z-10"></div>
              
              <!-- Content -->
              <div class="w-full md:w-5/12">
                <div :class="[
                  'bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-500',
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                ]">
                  <h3 class="text-xl font-bold text-gray-900 mb-2">{{ edu.degree }}</h3>
                  <p class="text-primary-600 font-medium mb-2">{{ edu.institution }}</p>
                  <div class="flex items-center text-gray-500 mb-4">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                    </svg>
                    <span>{{ edu.duration }}</span>
                  </div>
                  <p class="text-gray-700">{{ edu.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications Section -->
    <section v-if="certifications.length > 0" class="py-16 bg-gray-50">
      <div class="container mx-auto px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-10 text-center">Professional Certifications</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div v-for="(cert, index) in certifications" :key="index" class="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-500">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-xl font-bold text-gray-900">{{ cert.title }}</h3>
                <p class="text-primary-600">{{ cert.issuer }}</p>
              </div>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">{{ cert.year }}</span>
            </div>
            <p class="mt-4 text-gray-700">{{ cert.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Languages Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-8 max-w-4xl">
        <h2 class="text-3xl font-bold text-gray-900 mb-10 text-center">{{ t('languages.title') }}</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- English -->
          <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-500 text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ t('languages.english') }}</h3>
            <p class="text-gray-600 mb-4">Fluent</p>
            <div class="flex justify-center">
              <div v-for="i in 5" :key="i" class="w-3 h-3 mx-1 rounded-full bg-primary-500"></div>
            </div>
          </div>
          
          <!-- Hindi -->
          <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-500 text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ t('languages.hindi') }}</h3>
            <p class="text-gray-600 mb-4">Fluent</p>
            <div class="flex justify-center">
              <div v-for="i in 5" :key="i" class="w-3 h-3 mx-1 rounded-full bg-primary-500"></div>
            </div>
          </div>
          
          <!-- Assamese -->
          <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-500 text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ t('languages.assamese') }}</h3>
            <p class="text-gray-600 mb-4">Fluent</p>
            <div class="flex justify-center">
              <div v-for="i in 5" :key="i" class="w-3 h-3 mx-1 rounded-full bg-primary-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-primary-50">
      <div class="container mx-auto px-8 text-center">
        <h2 class="text-3xl font-bold mb-4 text-gray-900">Want to see my work?</h2>
        <p class="text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
          Check out the projects I've worked on throughout my career.
        </p>
        <NuxtLink to="/projects" class="btn btn-primary">
          {{ t('nav.projects') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>