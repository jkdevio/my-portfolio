<template>
  <header
    class="fixed w-full top-0 z-50 transition-all duration-300"
    :class="[
      scrolled
        ? 'bg-[#121212]/80 backdrop-blur-lg border-gray-800/50'
        : 'bg-[#121212] border-gray-800',
      'border-b',
    ]"
  >
    <nav class="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <a href="#" class="text-xl font-bold relative group">
          <span class="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
            >JK</span
          >
          <span
            class="absolute -inset-x-2 -inset-y-1 group-hover:bg-gray-800/50 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
          ></span>
        </a>

        <!-- Mobile Menu Button -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden text-gray-400 hover:text-gray-200 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              v-if="isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-4 sm:gap-8">
          <a
            href="#projects"
            class="relative text-gray-400 hover:text-gray-200 transition-colors group"
          >
            Projects
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
          <a href="#tools" class="text-gray-400 hover:text-gray-200 transition-colors">Tools</a>
          <a href="#contact" class="text-gray-400 hover:text-gray-200 transition-colors">Contact</a>
        </div>

        <!-- Profile Picture -->
        <div class="hidden md:flex items-center">
          <img
            src="/profile.jpg"
            alt="Profile"
            class="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-110"
          />
        </div>

        <!-- Mobile Menu -->
        <div
          v-if="isMenuOpen"
          class="absolute top-full left-0 right-0 bg-[#121212]/95 backdrop-blur-lg border-b border-gray-800 md:hidden transform transition-all duration-300"
          v-motion
          :initial="{ opacity: 0, y: -20 }"
          :enter="{ opacity: 1, y: 0 }"
          :leave="{ opacity: 0, y: -20 }"
        >
          <div class="p-4 space-y-4">
            <a href="#projects" class="block text-gray-400 hover:text-gray-200 transition-colors"
              >Projects</a
            >
            <a href="#tools" class="block text-gray-400 hover:text-gray-200 transition-colors"
              >Tools</a
            >
            <a href="#contact" class="block text-gray-400 hover:text-gray-200 transition-colors"
              >Contact</a
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
