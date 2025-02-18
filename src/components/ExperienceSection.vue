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
          class="absolute top-0 left-8 bottom-0 w-px bg-accent-dark/20 group-last:bg-gradient-to-b group-last:from-accent-dark/20 group-last:to-transparent"
        ></div>

        <!-- Timeline Dot -->
        <div
          class="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full border border-accent-light/20 bg-card group-hover:border-accent-light/40 transition-all duration-500 z-10"
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
            class="bg-card hover:bg-card-hover rounded-xl p-6 border border-accent-dark/10 hover:border-accent-light/10 transition-all duration-500 group-hover:translate-y-[-2px]"
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
    company: 'ITOH MEDCARE UK',
    role: 'Full Stack Developer',
    duration: '2024 - Present',
    description: [
      'Led the development of a high-performance web application for a healthcare company for keeping track of their patients and their medical records.',
    ],
    technologies: ['Vue.js', 'Node.JS', 'Git', 'TailwindCSS', 'JavaScript', 'Aws'],
  },
  {
    company: 'Slessor Healthcare UK',
    role: 'Full Stack Developer',
    duration: '2023 - Present',
    description: [
      'Led the development of a high-performance web application for a healthcare company for keeping track of their mails, records, payroll, and more.',
    ],
    technologies: ['Node.js', 'EJS', 'Express.Js', 'TailwindCSS', 'JavaScript', 'AWS'],
  },
  {
    company: 'Upwork',
    role: 'FreeLance Full Stack Developer',
    duration: '2022 - Present',
    description: [
      'FreeLance Full Stack Developer, working on various projects for different clients.',
    ],
    technologies: [
      'React',
      'Vue.js',
      'JavaScript',
      'CSS3',
      'Git',
      'TailwindCSS',
      'Node.JS',
      'Aws',
      'MongoDB',
      'MySQL',
      'PostgreSQL',
    ],
  },
]
</script>
