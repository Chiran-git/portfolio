<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref, watchEffect } from 'vue';
import { useHead } from '#imports';

const { t, locale } = useI18n();

useHead({
  title: t('experience.title') + ' - ' + t('hero.fullName')
});

const competencies = [
  {
    title: t('experience.competencies.fullstack.title'),
    description: t('experience.competencies.fullstack.description')
  },
  {
    title: t('experience.competencies.performance.title'),
    description: t('experience.competencies.performance.description')
  },
  {
    title: t('experience.competencies.agile.title'),
    description: t('experience.competencies.agile.description')
  },
  {
    title: t('experience.competencies.problemSolving.title'),
    description: t('experience.competencies.problemSolving.description')
  },
  {
    title: t('experience.competencies.versionControl.title'),
    description: t('experience.competencies.versionControl.description')
  }
];

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences = ref<Experience[]>([]);

watchEffect(() => {
  experiences.value = [
    {
      company: 'Successive Digital',
      role: t('experience.companies.successive.role'),
      period: 'Jan 2024 – ' + t('experience.current'),
      description: [
        t('experience.companies.successive.description.0'),
        t('experience.companies.successive.description.1'),
        t('experience.companies.successive.description.2')
      ],
      technologies: ['Vue.js', 'Laravel', 'MySQL']
    },
    {
      company: 'CAE Inc.',
      role: t('experience.companies.cae.role'),
      period: 'Jan 2023 – Dec 2023',
      description: [
        t('experience.companies.cae.description.0'),
        t('experience.companies.cae.description.1'),
        t('experience.companies.cae.description.2')
      ],
      technologies: ['Laravel', 'MySQL', 'AWS', 'Redis']
    },
    {
      company: 'ValueFirst',
      role: t('experience.companies.valueFirst.role'),
      period: 'Feb 2021 – Dec 2022',
      description: [
        t('experience.companies.valueFirst.description.0'),
        t('experience.companies.valueFirst.description.1'),
        t('experience.companies.valueFirst.description.2')
      ],
      technologies: ['Laravel', 'Redis', 'MongoDB', 'Laravel Echo Server']
    },
    {
      company: 'Ranium Systems Pvt Ltd',
      role: t('experience.companies.ranium.role'),
      period: 'March 2019 – Nov 2020',
      description: [
        t('experience.companies.ranium.description.0'),
        t('experience.companies.ranium.description.1'),
        t('experience.companies.ranium.description.2')
      ],
      technologies: ['Laravel', 'Vue.js', 'Magento', 'API Development']
    },
    {
      company: 'Ekodus Technologies Pvt Ltd',
      role: t('experience.companies.ekodus.role'),
      period: 'Apr 2018 – Dec 2018',
      description: [
        t('experience.companies.ekodus.description.0'),
        t('experience.companies.ekodus.description.1')
      ],
      technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript']
    },
    {
      company: 'Shass Information and Quality Engineering Services',
      role: t('experience.companies.shass.role'),
      period: 'Jan 2017 – Jan 2018',
      description: [
        t('experience.companies.shass.description.0'),
        t('experience.companies.shass.description.1')
      ],
      technologies: ['Laravel', 'MySQL', 'Frontend Development']
    }
  ];
});
</script>

<template>
  <div>
    <!-- Header -->
    <section class="bg-primary-50 py-16">
      <div class="container mx-auto px-8">
        <h1 class="text-4xl font-bold text-center text-gray-900 mb-4">{{ t('experience.title') }}</h1>
        <div class="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
        <p class="text-lg text-center text-gray-700 max-w-3xl mx-auto">
          {{ t('experience.experienceSummary') }}
        </p>
      </div>
    </section>

    <!-- Professional Summary -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-8">
        <div class="bg-primary-50 p-8 rounded-lg mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ t('experience.professionalSummary') }}</h2>
          <p class="text-gray-700 mb-4">
            {{ t('experience.summaryText') }}
          </p>
          <p class="text-gray-700">
            {{ t('experience.additionalInfo') }}
          </p>
        </div>

        <!-- Core Competencies -->
        <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ t('experience.coreCompetencies') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div v-for="(competency, index) in competencies" :key="index" class="bg-white p-6 shadow-stronger border-l-4 border-primary-500">
            <h3 class="font-bold text-lg mb-2">{{ competency.title }}</h3>
            <p class="text-gray-600">{{ competency.description }}</p>
          </div>
        </div>
        
        <!-- Work Experience Timeline -->
        <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ t('experience.workExperience') }}</h2>
        <div class="space-y-12">
          <div v-for="(exp, index) in experiences" :key="index" class="relative">
            <!-- Timeline Line -->
            <div v-if="index < experiences.length - 1" class="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div class="flex">
              <!-- Timeline Circle -->
              <div class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-primary-100 rounded-full border-4 border-white shadow-stronger z-10">
                <span class="text-primary-600 text-xl font-bold">+</span>
              </div>
              
              <!-- Content -->
              <div class="ml-8">
                <div class="flex flex-col md:flex-row md:items-center mb-2">
                  <h3 class="text-xl font-bold text-gray-900">{{ exp.role }}</h3>
                  <span class="md:ml-2 text-primary-600 font-medium">@ {{ exp.company }}</span>
                </div>
                <p class="text-gray-500 mb-4">{{ exp.period }}</p>
                
                <ul class="list-disc pl-5 mb-4 space-y-2">
                  <li v-for="(item, i) in exp.description" :key="i" class="text-gray-700">
                    {{ item }}
                  </li>
                </ul>
                
                <div class="flex flex-wrap gap-2 mb-2">
                  <span v-for="(tech, i) in exp.technologies" :key="i" class="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-primary-50">
      <div class="container mx-auto px-8 text-center">
        <h2 class="text-3xl font-bold mb-4 text-gray-900">{{ t('experience.interestedBackground') }}</h2>
        <p class="text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
          {{ t('experience.learnMore') }}
        </p>
        <div class="flex justify-center space-x-4">
          <NuxtLink to="/education" class="btn btn-primary">
            {{ t('nav.education') }}
          </NuxtLink>
          <NuxtLink to="/projects" class="btn btn-outline">
            {{ t('nav.projects') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>