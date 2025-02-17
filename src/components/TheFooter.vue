<template>
  <footer class="py-8 border-t border-[#2A2A2A]">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="flex justify-center space-x-8">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          class="text-gray-400 hover:text-gray-200 transition-colors text-sm"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socialLinks = [
  {
    name: 'Send an email',
    url: 'mailto:your.email@example.com',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourprofile',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
  },
]
</script>
