<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheHero from '@/components/TheHero.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ToolsSection from '@/components/ToolsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-[#121212] text-white relative">
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
    ></div>
    <div class="relative">
      <TheHeader />
      <main class="max-w-[1200px] mx-auto">
        <TheHero />
        <ProjectsSection />
        <ToolsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <TheFooter />
    </div>
  </div>
</template>
