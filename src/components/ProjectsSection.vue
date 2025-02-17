<template>
  <section class="py-16" id="projects">
    <h2 class="text-2xl font-bold mb-8 uppercase text-gray-200">Featured Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProjectCard v-for="project in projects" :key="project.title" v-bind="project" />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'

const projects = [
  {
    title: 'IntenseProxy',
    description:
      'Proxy provider solution including authentication, dashboard and dynamic features.',
    image: '/images/intense-proxy.jpg',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    links: [
      { url: 'https://github.com/project1', type: 'github' },
      { url: 'https://demo.project1.com', type: 'external' },
    ],
  },
  {
    title: 'SAAS+ Core',
    description: 'Set up a B2C tenant core using BAAS+',
    image: '/images/saas-core.jpg',
    tech: ['Next.js', 'TypeScript', 'Node.js'],
    links: [
      { url: 'https://github.com/project2', type: 'github' },
      { url: 'https://demo.project2.com', type: 'external' },
    ],
  },
  {
    title: 'Blockchain Explorer',
    description: 'Blockchain explorer open source project (block explorer) for blockchain.',
    image: '/images/blockchain-explorer.jpg',
    tech: ['React', 'Web3.js', 'Solidity'],
    links: [
      { url: 'https://github.com/project3', type: 'github' },
      { url: 'https://demo.project3.com', type: 'external' },
    ],
  },
  {
    title: 'MovieDB',
    description:
      'An application that displays different categories of movies and provides a search functionality.',
    image: '/images/moviedb.jpg',
    tech: ['React', 'Redux', 'TMDB API'],
    links: [
      { url: 'https://github.com/project4', type: 'github' },
      { url: 'https://demo.project4.com', type: 'external' },
    ],
  },
  {
    title: 'Soundify',
    description:
      'Music streaming application displays informative about artists, albums and much more.',
    image: '/images/soundify.jpg',
    tech: ['Vue.js', 'Node.js', 'MongoDB'],
    links: [
      { url: 'https://github.com/project5', type: 'github' },
      { url: 'https://demo.project5.com', type: 'external' },
    ],
  },
  {
    title: 'MyGadget',
    description:
      'Simple ecommerce store using a port based CMS and featuring a custom shopping cart.',
    image: '/images/mygadget.jpg',
    tech: ['Next.js', 'Stripe', 'Sanity.io'],
    links: [
      { url: 'https://github.com/project6', type: 'github' },
      { url: 'https://demo.project6.com', type: 'external' },
    ],
  },
]
</script>
