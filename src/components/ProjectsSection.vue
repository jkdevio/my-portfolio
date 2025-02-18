<template>
  <section class="py-24 px-4 sm:px-6 relative" id="projects">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute w-[800px] h-[800px] bg-accent-light/[0.01] rounded-full blur-3xl left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
      ></div>
    </div>

    <h2
      class="text-3xl sm:text-4xl font-light mb-16 text-accent-light text-center tracking-tight"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0 }"
    >
      Featured Projects
    </h2>

    <div
      class="grid grid-cols-1 gap-24 max-w-6xl mx-auto"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0, delay: 200 }"
    >
      <div
        v-for="(project, index) in projects"
        :key="project.name"
        class="group relative even:md:flex-row-reverse"
        v-motion
        :initial="{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }"
        :enter="{ opacity: 1, x: 0, delay: index * 200 }"
      >
        <!-- Project Content -->
        <div class="flex flex-col md:flex-row gap-12 items-center">
          <!-- Image Container -->
          <div class="w-full md:w-7/12 relative aspect-video rounded-xl overflow-hidden">
            <!-- Project Number -->
            <span
              class="absolute top-4 left-4 text-xs font-light text-accent-muted opacity-60 tracking-widest"
            >
              Featured Project {{ String(index + 1).padStart(2, '0') }}
            </span>
            <img
              :src="project.image"
              :alt="project.name"
              class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
            />
            <div
              class="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"
            ></div>
            <!-- Project Links -->
            <div
              class="absolute bottom-4 right-4 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700"
            >
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                class="p-3 rounded-lg bg-card/80 backdrop-blur-sm text-accent-muted hover:text-accent-light hover:scale-110 transition-all duration-300"
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
                class="p-3 rounded-lg bg-card/80 backdrop-blur-sm text-accent-muted hover:text-accent-light hover:scale-110 transition-all duration-300"
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

          <!-- Project Info -->
          <div class="w-full md:w-5/12 space-y-6">
            <div class="flex justify-between items-start mb-4">
              <h3
                class="text-3xl font-light text-accent-light tracking-wide group-hover:text-white transition-all duration-300"
              >
                {{ project.name }}
              </h3>
            </div>
            <div
              class="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-accent-dark/10 group-hover:border-accent-light/10 transition-all duration-500"
            >
              <p class="text-accent-muted leading-relaxed">{{ project.description }}</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="text-xs font-light text-accent-muted px-4 py-2 rounded-full bg-accent-dark/5 border border-accent-dark/10 hover:border-accent-light/10 hover:text-accent-light hover:translate-y-[-2px] transition-all duration-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    name: 'Medium',
    description: 'A Full Stack Blogging Platform',
    technologies: ['Express.js', 'Node.js', 'MongoDB', 'TailwindCSS', 'EJS'],
    github: 'https://github.com/jkdevio/Medium-Clone',
    demo: 'https://mediumclone.up.railway.app',
    image: '/images/img1.png',
  },
  {
    name: 'Personal Portfolio',
    description: 'My Personal Portfolio Website',
    technologies: ['Vue.js', 'TailwindCss', 'Vite', 'Node.js'],
    github: 'https://github.com/jkdevio/my-portfolio',
    demo: 'https://jkdevio-portfolio.vercel.app',
    image: '/images/img2.png',
  },
  // {
  //   name: 'MovieDB',
  //   description: 'Movie database application with real-time updates and recommendations.',
  //   technologies: ['Vue.js', 'Firebase', 'TailwindCSS'],
  //   github: 'https://github.com/yourusername/movie-db',
  //   demo: 'https://movie-db.demo.com',
  // },
  // {
  //   name: 'GitProfile',
  //   description: 'GitHub profile analyzer and statistics visualization tool.',
  //   technologies: ['TypeScript', 'GitHub API', 'Chart.js'],
  //   github: 'https://github.com/yourusername/git-profile',
  //   demo: 'https://git-profile.demo.com',
  // },
]
</script>
