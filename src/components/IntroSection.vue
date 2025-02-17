<template>
  <section class="h-screen relative overflow-hidden">
    <div class="max-w-[1200px] h-full mx-auto px-4 sm:px-6 flex items-center justify-center">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <!-- Gradient Orbs -->
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-transparent rounded-full animate-float"
          ></div>
          <div
            class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-blue-500/10 to-transparent rounded-full animate-float-delayed"
          ></div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="relative z-10 text-center">
        <!-- Main Title -->
        <div class="overflow-hidden">
          <h1
            class="text-[clamp(2.5rem,15vw,13rem)] font-extrabold leading-none tracking-tight"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }"
          >
            <span
              class="block text-gray-800/90 select-none mb-4 hover:scale-105 transition-transform duration-300"
            >
              Software
            </span>
            <span
              class="block bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent bg-[size:200%] animate-gradient font-black"
            >
              Developer
            </span>
          </h1>
        </div>

        <!-- Scroll Indicator -->
        <div
          class="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 1000 } }"
          @click="scrollToContent"
        >
          <div class="text-gray-400">
            <svg
              class="w-6 h-6 animate-bounce group-hover:text-purple-500 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
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
    transform: translate(-30px, 30px);
  }
}

@keyframes float-delayed {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(30px, -30px);
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
  animation: float 15s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 15s ease-in-out infinite;
}

.animate-gradient {
  animation: gradient 8s linear infinite;
}
</style>
