<template>
  <section class="py-8 sm:py-16 px-4 sm:px-6" id="projects">
    <h2 class="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 uppercase text-gray-200">
      Featured Projects
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Project Card -->
      <div v-for="project in projects" :key="project.name" class="group">
        <img
          :src="project.image"
          :alt="project.name"
          class="w-full aspect-[4/3] object-cover rounded-lg mb-4"
        />
        <div class="flex items-start justify-between mb-2">
          <h3 class="text-lg font-medium text-gray-200">{{ project.name }}</h3>
          <div class="flex gap-2">
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              class="text-gray-400 hover:text-gray-200 transition-colors"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                />
              </svg>
            </a>
            <a
              v-if="project.demo"
              :href="project.demo"
              target="_blank"
              class="text-gray-400 hover:text-gray-200 transition-colors"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
        <p class="text-sm text-gray-400 mb-2">{{ project.description }}</p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="text-xs text-gray-400 px-2 py-1 rounded bg-[#1E1E1E]"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    name: 'IntenseProxy',
    image: '/projects/project1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    technologies: ['React', 'Node.js', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    name: 'SAAVE Coin',
    image: '/projects/project2.jpg',
    description: 'Build a DeFi coin using SAAVE.',
    technologies: ['Vue', 'Nuxt', 'Node.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  // Add more projects...
]
</script>
