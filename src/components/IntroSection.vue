<template>
  <section class="h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <!-- Animated Grid -->
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"
        v-motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 1000 } }"
      ></div>

      <!-- Gradient Orbs -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float"
        ></div>
        <div
          class="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"
        ></div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 text-center">
      <!-- Subtitle -->
      <p
        class="text-gray-400 text-lg mb-4 tracking-wider"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
      >
        Hello, I'm a
      </p>

      <!-- Main Title -->
      <div class="overflow-hidden">
        <h1
          class="text-[clamp(2rem,15vw,12rem)] font-bold leading-none"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }"
        >
          <span
            class="block text-gray-800 select-none mb-2 hover:scale-105 transition-transform duration-300"
          >
            Software
          </span>
          <span
            class="block bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent bg-[size:200%] animate-gradient"
          >
            Developer
          </span>
        </h1>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 1000 } }"
        @click="scrollToContent"
      >
        <div class="flex flex-col items-center gap-2 text-gray-400">
          <span
            class="text-sm uppercase tracking-widest group-hover:text-gray-200 transition-colors"
          >
            Explore My Work
          </span>
          <svg
            class="w-5 h-5 animate-bounce group-hover:text-purple-500 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToContent = () => {
  document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style>
@keyframes float {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-20px, 20px);
  }
}

@keyframes float-delayed {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(20px, -20px);
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-float {
  animation: float 20s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 20s ease-in-out infinite;
}

.animate-gradient {
  animation: gradient 8s linear infinite;
}
</style>
