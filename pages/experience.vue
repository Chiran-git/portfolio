<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const experiences = [
  {
    company: 'Successive Digital',
    role: 'Specialist Engineer',
    period: 'Jan 2024 – Present',
    description: [
      'Working as a Vue.js and Laravel developer, building and optimizing web applications.',
      'Enhancing performance, ensuring code scalability, and improving system architecture.',
      'Collaborating with cross-functional teams to implement new features.'
    ],
    technologies: ['Vue.js', 'Laravel', 'MySQL']
  },
  {
    company: 'CAE Inc.',
    role: 'Senior Software Engineer',
    period: 'Jan 2023 – Dec 2023',
    description: [
      'Modified and added new features to an existing application using Laravel, MySQL, and AWS.',
      'Implemented Redis caching to improve application performance.',
      'Worked on cloud solutions for high availability and scalability.'
    ],
    technologies: ['Laravel', 'MySQL', 'AWS', 'Redis']
  },
  {
    company: 'ValueFirst',
    role: 'Senior Software Engineer',
    period: 'Feb 2021 – Dec 2022',
    description: [
      'Developed and maintained applications using Laravel, Redis, and MongoDB.',
      'Implemented Laravel Echo Server and Laravel Supervisor for real-time messaging.',
      'Optimized database queries and reduced API response times.'
    ],
    technologies: ['Laravel', 'Redis', 'MongoDB', 'Laravel Echo Server']
  },
  {
    company: 'Ranium Systems Pvt Ltd',
    role: 'Software Engineer',
    period: 'March 2019 – Nov 2020',
    description: [
      'Built web applications using Laravel and Vue.js.',
      'Customized Magento applications to enhance e-commerce functionality.',
      'Developed APIs and integrated third-party services.'
    ],
    technologies: ['Laravel', 'Vue.js', 'Magento', 'API Development']
  },
  {
    company: 'Ekodus Technologies Pvt Ltd',
    role: 'Software Developer, UI',
    period: 'Apr 2018 – Dec 2018',
    description: [
      'Developed UI components and customized WordPress themes/templates.',
      'Improved frontend performance and user experience.'
    ],
    technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript']
  },
  {
    company: 'Shass Information and Quality Engineering Services',
    role: 'Software Developer',
    period: 'Jan 2017 – Jan 2018',
    description: [
      'Worked on in-house projects using Laravel and MySQL.',
      'Designed and developed user-friendly interfaces and backend systems.'
    ],
    technologies: ['Laravel', 'MySQL', 'Frontend Development']
  }
];

const competencies = [
  {
    title: 'Full-stack Web Development',
    description: 'Expertise in Laravel, Vue.js, and MySQL to develop scalable applications.'
  },
  {
    title: 'Performance Optimization',
    description: 'Efficiently optimizing database queries and backend processing.'
  },
  {
    title: 'Agile Development',
    description: 'Proficient in working with Agile teams and managing project sprints.'
  },
  {
    title: 'Problem Solving',
    description: 'Strong analytical skills to troubleshoot and debug applications.'
  },
  {
    title: 'Version Control & CI/CD',
    description: 'Git, Jira, and automated deployment pipelines.'
  }
];
</script>

<template>
  <div>
    <!-- Header -->
    <section class="bg-primary-50 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center text-gray-900 mb-4">{{ t('experience.title') }}</h1>
        <div class="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
        <p class="text-lg text-center text-gray-700 max-w-3xl mx-auto">
          With over 8 years of experience in software development, I have worked across various domains and technologies. Below is a summary of my professional journey.
        </p>
      </div>
    </section>

    <!-- Professional Summary -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="bg-primary-50 p-8 rounded-lg mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h2>
          <p class="text-gray-700 mb-4">
            A result-oriented Software Engineer with over 7 years of experience in application development, specializing in backend and frontend technologies such as Laravel, PHP, Vue.js, and MySQL. Adept at building scalable applications, optimizing performance, and implementing innovative solutions to enhance user experience.
          </p>
          <p class="text-gray-700">
            Proficient in Agile methodologies, Git version control, and cloud-based services like AWS.
          </p>
        </div>

        <!-- Core Competencies -->
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Core Competencies</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div v-for="(competency, index) in competencies" :key="index" class="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-500">
            <h3 class="font-bold text-lg mb-2">{{ competency.title }}</h3>
            <p class="text-gray-600">{{ competency.description }}</p>
          </div>
        </div>
        
        <!-- Work Experience Timeline -->
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Work Experience</h2>
        <div class="space-y-12">
          <div v-for="(exp, index) in experiences" :key="index" class="relative">
            <!-- Timeline Line -->
            <div v-if="index < experiences.length - 1" class="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div class="flex">
              <!-- Timeline Circle -->
              <div class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-primary-100 rounded-full border-4 border-white shadow-md z-10">
                <span class="text-primary-600 text-xl font-bold">{{ exp.company.charAt(0) }}</span>
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
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4 text-gray-900">Interested in my background?</h2>
        <p class="text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
          Learn more about my educational background and projects I've worked on throughout my career.
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