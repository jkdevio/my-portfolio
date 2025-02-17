<template>
  <section class="py-16 px-4 sm:px-6" id="tools">
    <h2
      class="text-xl sm:text-2xl font-bold mb-8 uppercase text-gray-200 text-center"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0 }"
    >
      Technologies & Tools
    </h2>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0, delay: 200 }"
    >
      <div
        v-for="tool in tools"
        :key="tool.name"
        class="group bg-[#1A1A1A] p-4 rounded-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300"
      >
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center">
            <img :src="tool.icon" :alt="tool.name" class="w-6 h-6" />
          </div>
          <div>
            <span
              class="text-sm font-medium text-gray-300 group-hover:text-gray-100 transition-colors"
            >
              {{ tool.name }}
            </span>
            <span class="block text-xs text-gray-500">{{ tool.type }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const tools = [
  { name: 'Vue.js', icon: '/icons/vue.svg', type: 'Frontend' },
  { name: 'React', icon: '/icons/react.svg', type: 'Frontend' },
  { name: 'Node.js', icon: '/icons/nodejs.svg', type: 'Backend' },
  { name: 'TypeScript', icon: '/icons/typescript.svg', type: 'Language' },
  { name: 'MongoDB', icon: '/icons/mongodb.svg', type: 'Database' },
  { name: 'Docker', icon: '/icons/docker.svg', type: 'DevOps' },
  { name: 'AWS', icon: '/icons/aws.svg', type: 'Cloud' },
  { name: 'Git', icon: '/icons/git.svg', type: 'Version Control' },
  // Add more tools as needed
]
</script>
