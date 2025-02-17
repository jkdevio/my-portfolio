<template>
  <footer class="py-8 sm:py-16 px-4 sm:px-6 border-t border-gray-800">
    <div class="max-w-[1200px] mx-auto">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex gap-4">
          <a
            href="mailto:your.email@example.com"
            class="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
          >
            <span
              class="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center"
              >@</span
            >
            Send an email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            class="text-gray-400 hover:text-gray-200 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            class="text-gray-400 hover:text-gray-200 transition-colors"
          >
            GitHub
          </a>
        </div>
        <p class="text-sm text-gray-400">© 2024 Jonathan Kalu. All rights reserved.</p>
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
