<template>
  <section class="py-16 px-4 sm:px-6" id="tools">
    <h2
      class="text-xl sm:text-2xl font-bold mb-8 uppercase text-gray-200 text-center"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0 }"
    >
      Tools I Use
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
        class="group bg-[#1E1E1E] p-4 rounded-lg hover:bg-[#2A2A2A] transition-all duration-300 transform hover:-translate-y-1"
      >
        <div class="flex items-center gap-3">
          <img :src="tool.icon" :alt="tool.name" class="w-6 h-6" />
          <span class="text-gray-400 group-hover:text-gray-200 transition-colors">
            {{ tool.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const tools = [
  { name: 'Vue.js', icon: '/icons/vue.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'MongoDB', icon: '/icons/mongodb.svg' },
  { name: 'Docker', icon: '/icons/docker.svg' },
  { name: 'AWS', icon: '/icons/aws.svg' },
  { name: 'Git', icon: '/icons/git.svg' },
  // Add more tools as needed
]
</script>
