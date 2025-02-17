<template>
  <header class="fixed w-full top-0 z-50 bg-[#121212] border-b border-gray-800">
    <nav class="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <div class="flex justify-between items-center">
        <a href="#" class="text-xl font-bold text-gray-200">JK</a>

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
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-4 sm:gap-8">
          <a href="#projects" class="text-gray-400 hover:text-gray-200 transition-colors"
            >Projects</a
          >
          <a href="#resume" class="text-gray-400 hover:text-gray-200 transition-colors">Resume</a>
          <a href="#contact" class="text-gray-400 hover:text-gray-200 transition-colors">Contact</a>
          <img
            src="/profile.jpg"
            alt="Profile"
            class="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-gray-700"
          />
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-show="isMenuOpen" class="md:hidden pt-4 pb-2 space-y-2">
        <a href="#projects" class="block text-gray-400 hover:text-gray-200 transition-colors py-2"
          >Projects</a
        >
        <a href="#resume" class="block text-gray-400 hover:text-gray-200 transition-colors py-2"
          >Resume</a
        >
        <a href="#contact" class="block text-gray-400 hover:text-gray-200 transition-colors py-2"
          >Contact</a
        >
        <div class="flex items-center justify-between py-2">
          <img
            src="/profile.jpg"
            alt="Profile"
            class="w-8 h-8 rounded-full object-cover border border-gray-700"
          />
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>
