<template>
  <nav
    ref="navbar"
    class="navbar fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="{
      'navbar--hidden':     isHidden,
      'navbar--scrolled':   isScrolled,
      'navbar--top':       !isScrolled,
    }"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">

      <!-- ── Logo ────────────────────────────────── -->
      <a href="#hero" @click.prevent="scrollTo('hero')" class="logo group flex items-center gap-2">
        <span class="logo-icon text-xl">✦</span>
        <span class="logo-text font-black tracking-widest text-sm uppercase">
          <span class="text-anime-primary">Asanagi</span>
          <span class="text-anime-text"> ピープジー</span>
        </span>
      </a>

      <!-- ── Desktop Nav Links ──────────────────── -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            @click.prevent="scrollTo(item.id)"
            class="nav-link relative text-xs font-semibold uppercase tracking-widest transition-colors duration-300"
            :class="activeSection === item.id ? 'text-anime-primary' : 'text-anime-muted hover:text-anime-text'"
          >
            <span class="chapter-num text-anime-primary opacity-60 mr-1">{{ item.num }}</span>
            {{ item.label }}
            <span
              class="nav-underline absolute -bottom-1 left-0 h-px bg-gradient-to-r from-anime-primary to-anime-secondary transition-all duration-300"
              :class="activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'"
            />
          </a>
        </li>
      </ul>

      <!-- ── CTA Button ─────────────────────────── -->
      <a
        href="#contact"
        @click.prevent="scrollTo('contact')"
        class="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest border border-anime-primary text-anime-primary rounded-sm transition-all duration-300 hover:bg-anime-primary hover:text-anime-darker glow-pulse-pink btn-ripple relative overflow-hidden"
      >
        <span>✉</span> Hire Me
      </a>

      <!-- ── Mobile Hamburger ───────────────────── -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-2 group"
        @click="toggleMobile"
        aria-label="Toggle menu"
      >
        <span
          class="hamburger-line block w-6 h-px bg-anime-text transition-all duration-300"
          :class="mobileOpen ? 'rotate-45 translate-y-2' : ''"
        />
        <span
          class="hamburger-line block w-4 h-px bg-anime-primary transition-all duration-300"
          :class="mobileOpen ? 'opacity-0 w-0' : ''"
        />
        <span
          class="hamburger-line block w-6 h-px bg-anime-text transition-all duration-300"
          :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''"
        />
      </button>
    </div>

    <!-- ── Mobile Menu ────────────────────────────── -->
    <transition name="mobile-menu">
      <div
        v-if="mobileOpen"
        class="md:hidden mobile-menu glass-card border-t border-anime-primary/20 px-6 py-6"
      >
        <ul class="flex flex-col gap-5">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              @click.prevent="scrollToMobile(item.id)"
              class="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest transition-colors duration-200"
              :class="activeSection === item.id ? 'text-anime-primary' : 'text-anime-muted'"
            >
              <span class="text-anime-primary text-xs">{{ item.num }}</span>
              {{ item.label }}
              <span v-if="activeSection === item.id" class="ml-auto text-anime-primary text-xs">◆</span>
            </a>
          </li>
        </ul>
        <div class="mt-6 pt-5 border-t border-white/5">
          <a
            href="#contact"
            @click.prevent="scrollToMobile('contact')"
            class="block text-center py-3 border border-anime-primary text-anime-primary text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-anime-primary hover:text-anime-darker transition-all duration-300"
          >
            ✉ Hire Me
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { id: 'hero',     label: 'Home',     num: '01' },
  { id: 'about',    label: 'About',    num: '02' },
  { id: 'projects', label: 'Projects', num: '03' },
  { id: 'skills',   label: 'Skills',   num: '04' },
  { id: 'contact',  label: 'Contact',  num: '05' },
]

const navbar        = ref(null)
const isHidden      = ref(false)
const isScrolled    = ref(false)
const mobileOpen    = ref(false)
const activeSection = ref('hero')

let lastScrollY = 0

function onScroll() {
  const currentY = window.scrollY

  // Hide/show on scroll direction
  isHidden.value   = currentY > lastScrollY && currentY > 100
  isScrolled.value = currentY > 20
  lastScrollY      = currentY

  // Active section detection
  for (const item of [...navItems].reverse()) {
    const el = document.getElementById(item.id)
    if (el && el.getBoundingClientRect().top <= 120) {
      activeSection.value = item.id
      break
    }
  }
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function scrollToMobile(id) {
  mobileOpen.value = false
  setTimeout(() => scrollTo(id), 300)
}

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.navbar--top {
  background: transparent;
}

.navbar--scrolled {
  background: rgba(5, 5, 8, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 107, 157, 0.12);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
}

.navbar--hidden {
  transform: translateY(-100%);
}

.logo-icon {
  color: var(--anime-primary);
  filter: drop-shadow(0 0 8px var(--anime-primary));
  transition: transform 0.3s ease;
}
.logo:hover .logo-icon {
  transform: rotate(180deg) scale(1.2);
}

.nav-link:hover .nav-underline {
  width: 100%;
}

/* Mobile menu transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>