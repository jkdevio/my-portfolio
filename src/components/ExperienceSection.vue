<template>
  <section class="py-16 px-4 sm:px-6" id="experience">
    <h2
      class="text-xl sm:text-2xl font-bold mb-12 uppercase text-gray-200 text-center"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0 }"
    >
      Work Experience
    </h2>
    <div
      class="max-w-3xl mx-auto"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0, delay: 200 }"
    >
      <div
        v-for="(experience, index) in experiences"
        :key="index"
        class="group relative mb-12 last:mb-0"
      >
        <!-- Timeline Line -->
        <div
          class="absolute top-0 left-8 bottom-0 w-px bg-gray-800 group-last:bg-gradient-to-b group-last:from-gray-800 group-last:to-transparent"
        ></div>

        <!-- Timeline Dot -->
        <div
          class="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-purple-500 bg-[#1A1A1A] z-10"
        ></div>

        <!-- Content Card -->
        <div class="ml-16 relative">
          <!-- Company & Duration -->
          <div class="flex flex-wrap items-center gap-3 mb-2">
            <h3 class="text-lg font-medium text-gray-200">{{ experience.company }}</h3>
            <span class="text-sm text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full">
              {{ experience.duration }}
            </span>
          </div>

          <!-- Role -->
          <h4 class="text-base text-purple-400 mb-4">{{ experience.role }}</h4>

          <!-- Description -->
          <div
            class="bg-[#1A1A1A] rounded-xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300"
          >
            <ul class="space-y-3">
              <li
                v-for="(point, pointIndex) in experience.description"
                :key="pointIndex"
                class="flex gap-3 text-sm text-gray-400 leading-relaxed group/item"
              >
                <span class="text-purple-500/50 group-hover/item:text-purple-500 transition-colors"
                  >▹</span
                >
                {{ point }}
              </li>
            </ul>

            <!-- Technologies Used -->
            <div class="mt-6 pt-6 border-t border-gray-800/50">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in experience.technologies"
                  :key="tech"
                  class="text-xs font-medium text-gray-400 px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700/50"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Senior Frontend Developer',
    duration: '2022 - Present',
    description: [
      'Led the development of a high-performance web application using Vue.js and TypeScript, resulting in a 40% improvement in load times.',
      'Implemented state management solutions using Pinia, improving application maintainability and scalability.',
      'Mentored junior developers and conducted code reviews to ensure high code quality and best practices.',
      'Collaborated with UI/UX designers to implement responsive and accessible user interfaces.',
    ],
    technologies: ['Vue.js', 'TypeScript', 'Pinia', 'TailwindCSS', 'Jest'],
  },
  {
    company: 'Digital Innovations Ltd.',
    role: 'Full Stack Developer',
    duration: '2020 - 2022',
    description: [
      'Developed and maintained RESTful APIs using Node.js and Express, serving over 100k daily active users.',
      'Designed and implemented MongoDB database schemas, optimizing query performance.',
      'Built real-time features using WebSocket technology for live updates and notifications.',
      'Deployed and maintained applications using Docker and AWS infrastructure.',
    ],
    technologies: ['Node.js', 'MongoDB', 'Express', 'Docker', 'AWS'],
  },
  {
    company: 'StartUp Hub',
    role: 'Frontend Developer',
    duration: '2019 - 2020',
    description: [
      'Created responsive and interactive user interfaces using React and Redux.',
      'Integrated third-party APIs and services to enhance application functionality.',
      'Implemented automated testing using Jest and React Testing Library.',
      'Optimized application performance through code splitting and lazy loading.',
    ],
    technologies: ['React', 'Redux', 'JavaScript', 'CSS3', 'Git'],
  },
]
</script>
