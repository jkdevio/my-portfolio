<template>
  <section id="hero" class="pt-24 sm:pt-32 pb-8 sm:pb-16 px-4 sm:px-6">
    <div class="flex flex-col md:flex-row items-center gap-12">
      <!-- Image Container -->
      <div class="w-full md:w-5/12">
        <div class="relative group">
          <!-- Image with overlay -->
          <div class="relative rounded-2xl overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Jonathan Kalu"
              class="w-full aspect-square object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <div
              class="absolute inset-0 bg-purple-500/10 group-hover:bg-transparent transition-colors duration-300"
            ></div>
          </div>

          <!-- Decorative border -->
          <div
            class="absolute -inset-2 border-2 border-purple-500/20 rounded-2xl group-hover:-inset-3 transition-all duration-300"
          ></div>
        </div>
      </div>

      <!-- Content Container -->
      <div class="w-full md:w-7/12">
        <p class="text-gray-400 mb-2 text-sm sm:text-base">Hey, I'm</p>
        <h1 class="text-4xl sm:text-6xl font-bold mb-4">
          <span class="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent"
            >Jonathan</span
          >
          <span
            class="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent ml-2"
            >Kalu</span
          >
        </h1>
        <p class="text-gray-400 mb-8 text-sm sm:text-base leading-relaxed">
          I'm a software developer passionate about building tech-focused platforms that enhance
          user experiences and solve real-world problems. I enjoy creating things that live on the
          internet, from websites to applications and everything in between. With hands-on
          experience in web development, I've worked on various projects, gaining valuable knowledge
          in different aspects of the tech industry. My goal is to continue innovating and
          delivering impactful solutions through technology. 🚀
        </p>
        <div class="flex flex-wrap gap-4 text-sm sm:text-base">
          <a
            href="mailto:jonathankalu313@gmail.com"
            class="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
          >
            <span
              class="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center"
              >@</span
            >
            Send an email
          </a>
          <a
            href="https://linkedin.com/in/jonathankalu"
            target="_blank"
            class="text-gray-400 hover:text-gray-200 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jkdevio"
            target="_blank"
            class="text-gray-400 hover:text-gray-200 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
