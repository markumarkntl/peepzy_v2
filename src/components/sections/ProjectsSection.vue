<template>
  <section
    id="projects"
    ref="sectionRef"
    class="relative py-28 lg:py-36 overflow-hidden"
    style="background: var(--anime-dark)"
  >
    <!-- ── Background decoration ──────────────── -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 opacity-[0.025]"
        style="background-image: linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px); background-size: 60px 60px;"
      />
      <div class="absolute top-0 left-0 right-0 h-px"
        style="background: linear-gradient(90deg, transparent, rgba(255,107,157,0.3), transparent)"
      />
      <div class="absolute bottom-0 left-0 right-0 h-px"
        style="background: linear-gradient(90deg, transparent, rgba(192,132,252,0.3), transparent)"
      />
      <div class="absolute top-1/3 right-0 w-96 h-96 rounded-full blur-3xl"
        style="background: rgba(56,189,248,0.04)"
      />
      <div class="absolute bottom-1/3 left-0 w-80 h-80 rounded-full blur-3xl"
        style="background: rgba(255,107,157,0.05)"
      />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

      <!-- ── Section header ─────────────────────── -->
      <div ref="headerRef" class="mb-12 opacity-0">
        <p class="chapter-label mb-3 flex items-center gap-3">
          <span class="inline-block w-8 h-px bg-anime-primary" />
          Chapter 03
        </p>
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <h2 class="text-4xl lg:text-5xl font-black text-anime-text">
            My <span class="gradient-text">Projects</span>
          </h2>
          <p class="text-anime-muted text-sm max-w-xs">
            A selection of things I've built with passion ✨
          </p>
        </div>
      </div>

      <!-- ── Filter tabs ────────────────────────── -->
      <div ref="filterRef" class="opacity-0 flex flex-wrap gap-2 mb-10">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="setFilter(cat.id)"
          class="filter-btn relative px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 overflow-hidden"
          :class="activeFilter === cat.id
            ? 'text-anime-darker bg-anime-primary'
            : 'text-anime-muted border border-white/10 hover:border-anime-primary/40 hover:text-anime-primary'"
        >
          <span class="relative z-10">{{ cat.icon }} {{ cat.label }}</span>
          <!-- active shimmer -->
          <div v-if="activeFilter === cat.id"
            class="absolute inset-0 opacity-30"
            style="background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%); animation: shimmer-slide 2s infinite"
          />
        </button>
        <span class="ml-auto text-xs text-anime-muted self-center">
          {{ filteredProjects.length }} project{{ filteredProjects.length !== 1 ? 's' : '' }}
        </span>
      </div>

      <!-- ── Projects grid ──────────────────────── -->
      <div
        ref="gridRef"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <TransitionGroup name="project-card">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            :ref="el => { if (el) cardEls.push(el) }"
            class="project-card tilt-card glass-card rounded-sm overflow-hidden cursor-pointer group"
            style="border: 1px solid rgba(255,255,255,0.06)"
            @mousemove="onCardTilt($event, $el)"
            @mouseleave="onCardReset($event, $el)"
            @mouseenter="onCardEnter($event)"
          >
            <!-- ── Thumbnail ─────────────────── -->
            <div class="thumbnail relative overflow-hidden aspect-video bg-anime-darker">
              <!-- Placeholder gradient thumbnail -->
              <div
                class="w-full h-full flex items-center justify-center text-5xl transition-transform duration-500 group-hover:scale-110"
                :style="`background: linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`"
              >
                {{ project.emoji }}
              </div>

              <!-- Hover overlay -->
              <div class="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style="background: rgba(5,5,8,0.75); backdrop-filter: blur(4px)"
              >
                <a :href="project.demo" target="_blank" rel="noopener"
                   @click.stop
                   class="px-4 py-2 bg-anime-primary text-anime-darker text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white transition-colors duration-200"
                >
                  ↗ Live
                </a>
                <a :href="project.github" target="_blank" rel="noopener"
                   @click.stop
                   class="px-4 py-2 border border-white/40 text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:border-anime-primary hover:text-anime-primary transition-all duration-200"
                >
                  ⌥ Code
                </a>
              </div>

              <!-- Category badge -->
              <div class="absolute top-3 left-3">
                <span class="px-2 py-1 text-xs font-bold uppercase tracking-wider rounded-sm"
                  :style="`background: ${project.badgeColor}22; color: ${project.badgeColor}; border: 1px solid ${project.badgeColor}44`"
                >
                  {{ project.category }}
                </span>
              </div>

              <!-- Featured star -->
              <div v-if="project.featured" class="absolute top-3 right-3 text-yellow-400 text-sm" title="Featured">★</div>
            </div>

            <!-- ── Card body ─────────────────── -->
            <div class="p-5 space-y-3">
              <!-- Title row -->
              <div class="flex items-start justify-between gap-2">
                <h3 class="font-black text-anime-text text-base leading-tight group-hover:text-anime-primary transition-colors duration-300">
                  {{ project.title }}
                </h3>
                <span class="text-anime-muted text-xs font-mono flex-shrink-0 mt-0.5">
                  {{ project.year }}
                </span>
              </div>

              <!-- Description -->
              <p class="text-anime-muted text-sm leading-relaxed line-clamp-2">
                {{ project.description }}
              </p>

              <!-- Tech tags -->
              <div class="flex flex-wrap gap-1.5 pt-1">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="px-2 py-0.5 text-xs rounded-sm font-medium"
                  style="background: rgba(255,107,157,0.08); color: var(--anime-muted); border: 1px solid rgba(255,107,157,0.12)"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Bottom manga line -->
              <div class="pt-2 flex items-center justify-between">
                <div class="h-px flex-1 mr-3 rounded-full transition-all duration-500"
                  :style="`background: linear-gradient(90deg, ${project.gradientFrom}60, transparent); width: 0`"
                  :class="'group-hover:w-full'"
                />
                <span class="text-anime-primary text-xs font-bold group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>

      <!-- ── Empty state ────────────────────────── -->
      <div v-if="filteredProjects.length === 0"
        class="text-center py-20 text-anime-muted"
      >
        <div class="text-5xl mb-4">🔍</div>
        <p class="text-sm uppercase tracking-widest">No projects in this category yet</p>
      </div>

      <!-- ── View more CTA ──────────────────────── -->
      <div class="text-center mt-12">
        <a href="https://github.com" target="_blank" rel="noopener"
          class="inline-flex items-center gap-2 px-6 py-3 border border-anime-primary/30 text-anime-primary text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-anime-primary hover:text-anime-darker transition-all duration-300 group"
        >
          <span>More on GitHub</span>
          <span class="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUpdate } from 'vue'
import { gsap }          from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ── Refs ────────────────────────────────────────
const sectionRef = ref(null)
const headerRef  = ref(null)
const filterRef  = ref(null)
const gridRef    = ref(null)
const cardEls    = ref([])

onBeforeUpdate(() => { cardEls.value = [] })

// ── Filter ───────────────────────────────────────
const activeFilter = ref('all')
const categories = [
  { id: 'all',    label: 'All',    icon: '✦' },
  { id: 'web',    label: 'Web',    icon: '🌐' },
  { id: 'mobile', label: 'Mobile', icon: '📱' },
  { id: 'design', label: 'Design', icon: '🎨' },
  { id: 'oss',    label: 'OSS',    icon: '⚡' },
]

function setFilter(id) {
  activeFilter.value = id
  // Re-animate cards after filter
  setTimeout(() => {
    gsap.fromTo(cardEls.value,
      { opacity: 0, y: 20, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.07, ease: 'power2.out' }
    )
  }, 50)
}

// ── Projects data ────────────────────────────────
const projects = [
  {
    id: 1, featured: true,
    title: 'AniTrack Dashboard',
    description: 'A beautiful anime tracking dashboard with real-time stats, watchlist management, and recommendation engine.',
    category: 'web', emoji: '🎌',
    tech: ['Vue 3', 'Pinia', 'GSAP', 'Tailwind'],
    demo: '#', github: '#', year: '2024',
    gradientFrom: '#FF6B9D', gradientTo: '#C084FC',
    badgeColor: '#FF6B9D',
  },
  {
    id: 2, featured: false,
    title: 'SakuraCMS',
    description: 'A headless CMS with an anime aesthetic, markdown support, drag-and-drop editor, and live preview.',
    category: 'web', emoji: '🌸',
    tech: ['Nuxt 3', 'TipTap', 'Node.js', 'MongoDB'],
    demo: '#', github: '#', year: '2024',
    gradientFrom: '#C084FC', gradientTo: '#38BDF8',
    badgeColor: '#C084FC',
  },
  {
    id: 3, featured: true,
    title: 'MangaReader App',
    description: 'Cross-platform mobile app for reading manga with offline mode, dark theme, and reading progress sync.',
    category: 'mobile', emoji: '📖',
    tech: ['React Native', 'Expo', 'SQLite'],
    demo: '#', github: '#', year: '2023',
    gradientFrom: '#38BDF8', gradientTo: '#FF6B9D',
    badgeColor: '#38BDF8',
  },
  {
    id: 4, featured: false,
    title: 'Yuki UI Kit',
    description: 'Open-source Vue component library with anime-inspired design system, 50+ components, dark mode.',
    category: 'oss', emoji: '⚡',
    tech: ['Vue 3', 'TypeScript', 'Vite', 'Storybook'],
    demo: '#', github: '#', year: '2024',
    gradientFrom: '#FF6B9D', gradientTo: '#38BDF8',
    badgeColor: '#FF6B9D',
  },
  {
    id: 5, featured: false,
    title: 'Portfolio v2',
    description: 'Interactive portfolio with anime aesthetics, GSAP animations, and 3D elements. The one you\'re looking at!',
    category: 'design', emoji: '✨',
    tech: ['Vue 3', 'GSAP', 'Tailwind', 'Three.js'],
    demo: '#', github: '#', year: '2024',
    gradientFrom: '#C084FC', gradientTo: '#FF6B9D',
    badgeColor: '#C084FC',
  },
  {
    id: 6, featured: false,
    title: 'NekoDB',
    description: 'Lightweight local-first database library for JavaScript with reactive queries and TypeScript support.',
    category: 'oss', emoji: '🐱',
    tech: ['TypeScript', 'Rollup', 'Jest'],
    demo: '#', github: '#', year: '2023',
    gradientFrom: '#38BDF8', gradientTo: '#C084FC',
    badgeColor: '#38BDF8',
  },
]

const filteredProjects = computed(() =>
  activeFilter.value === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter.value)
)

// ── 3D Card tilt ─────────────────────────────────
function onCardTilt(e, el) {
  const card   = e.currentTarget
  const rect   = card.getBoundingClientRect()
  const x      = e.clientX - rect.left
  const y      = e.clientY - rect.top
  const cx     = rect.width  / 2
  const cy     = rect.height / 2
  const rotateX = ((y - cy) / cy) * -8
  const rotateY = ((x - cx) / cx) *  8

  gsap.to(card, {
    rotateX,
    rotateY,
    transformPerspective: 800,
    duration: 0.3,
    ease: 'power2.out',
  })
}

function onCardReset(e) {
  gsap.to(e.currentTarget, {
    rotateX: 0, rotateY: 0,
    duration: 0.5,
    ease: 'power3.out',
  })
}

function onCardEnter(e) {
  gsap.to(e.currentTarget, {
    scale: 1.02,
    duration: 0.3,
    ease: 'power2.out',
  })
  e.currentTarget.addEventListener('mouseleave', () => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.4, ease: 'power3.out' })
  }, { once: true })
}

// ── GSAP ScrollTrigger ───────────────────────────
onMounted(() => {
  gsap.set([headerRef.value, filterRef.value], { y: 30 })

  gsap.to(headerRef.value, {
    opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    scrollTrigger: { trigger: headerRef.value, start: 'top 85%' },
  })

  gsap.to(filterRef.value, {
    opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
    scrollTrigger: { trigger: filterRef.value, start: 'top 85%' },
  })

  ScrollTrigger.create({
    trigger: gridRef.value,
    start: 'top 80%',
    onEnter: () => {
      gsap.fromTo(cardEls.value,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        }
      )
    },
  })
})
</script>

<style scoped>
/* ── Card transition (filter change) ─── */
.project-card-enter-active,
.project-card-leave-active {
  transition: all 0.3s ease;
}
.project-card-enter-from,
.project-card-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}

/* ── Filter shimmer ─────────────────── */
@keyframes shimmer-slide {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
}

/* ── Line clamp ─────────────────────── */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>