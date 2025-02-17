<script setup>
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheHero from '@/components/TheHero.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-[#121212] text-white">
    <TheHeader />
    <main class="max-w-[1200px] mx-auto">
      <TheHero />
      <ExperienceSection />
      <ProjectsSection />
    </main>
    <TheFooter />
  </div>
</template>
