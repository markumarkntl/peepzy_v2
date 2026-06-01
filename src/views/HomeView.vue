<template>
  <main>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
    <Footer />
  </main>
</template>

<script setup>
import Navbar         from '@/components/layout/Navbar.vue'
import Footer         from '@/components/layout/Footer.vue'
import HeroSection    from '@/components/sections/HeroSection.vue'
import AboutSection   from '@/components/sections/AboutSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import SkillsSection  from '@/components/sections/SkillsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>