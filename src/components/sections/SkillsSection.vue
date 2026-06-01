<template>
  <section
    id="skills"
    ref="sectionRef"
    class="relative py-28 lg:py-36 bg-anime-darker overflow-hidden"
  >
    <!-- ── Background ──────────────────────────── -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 opacity-[0.025]"
        style="background-image: linear-gradient(rgba(192,132,252,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(192,132,252,0.8) 1px, transparent 1px); background-size: 60px 60px;"
      />
      <div class="absolute top-0 left-0 right-0 h-px"
        style="background: linear-gradient(90deg, transparent, rgba(192,132,252,0.3), transparent)"
      />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style="background: radial-gradient(circle, rgba(192,132,252,0.04) 0%, transparent 70%)"
      />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

      <!-- ── Section header ─────────────────────── -->
      <div ref="headerRef" class="mb-16 opacity-0">
        <p class="chapter-label mb-3 flex items-center gap-3">
          <span class="inline-block w-8 h-px bg-anime-primary" />
          Chapter 04
        </p>
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 class="text-4xl lg:text-5xl font-black text-anime-text">
            My <span class="gradient-text">Skills</span>
          </h2>
          <p class="text-anime-muted text-sm max-w-xs">
            Technologies I work with daily ⚡
          </p>
        </div>
      </div>

      <!-- ── Category tabs ──────────────────────── -->
      <div ref="tabsRef" class="opacity-0 flex flex-wrap gap-2 mb-12">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="activeCategory = cat.id"
          class="px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300"
          :class="activeCategory === cat.id
            ? 'text-anime-darker bg-anime-primary shadow-lg'
            : 'text-anime-muted border border-white/10 hover:border-anime-primary/40 hover:text-anime-primary'"
        >
          {{ cat.icon }} {{ cat.label }}
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        <!-- LEFT — Skill bars -->
        <div ref="barsRef" class="opacity-0 space-y-6">
          <h3 class="text-xs text-anime-muted uppercase tracking-widest mb-6 flex items-center gap-3">
            <span class="text-anime-primary">◆</span>
            Proficiency Levels
          </h3>

          <TransitionGroup name="skill-bar" tag="div" class="space-y-5">
            <div
              v-for="skill in activeSkills"
              :key="skill.name"
              class="skill-row group"
            >
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-2">
                  <span class="text-base">{{ skill.icon }}</span>
                  <span class="text-sm font-semibold text-anime-text group-hover:text-anime-primary transition-colors duration-200">
                    {{ skill.name }}
                  </span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-xs text-anime-muted font-mono">{{ skill.level }}%</span>
                  <span
                    class="px-1.5 py-0.5 text-xs rounded-sm font-bold"
                    :style="`background: ${skill.color}18; color: ${skill.color}; border: 1px solid ${skill.color}33`"
                  >{{ skill.badge }}</span>
                </div>
              </div>
              <div class="bar-track relative h-2 rounded-full overflow-hidden" style="background: rgba(255,255,255,0.05)">
                <div
                  :ref="el => { if (el) barFillEls.push(el) }"
                  class="bar-fill absolute left-0 top-0 h-full rounded-full"
                  :style="`width: 0%; background: linear-gradient(90deg, ${skill.color}, ${skill.colorEnd}); box-shadow: 0 0 8px ${skill.color}66;`"
                />
              </div>
              <div class="relative h-0">
                <div v-for="m in [25, 50, 75]" :key="m"
                  class="absolute top-1 w-px h-2 opacity-20"
                  :style="`left: ${m}%; background: var(--anime-muted)`"
                />
              </div>
            </div>
          </TransitionGroup>
        </div>

        <!-- RIGHT — Icon grid + Timeline -->
        <div ref="iconsRef" class="opacity-0">
          <h3 class="text-xs text-anime-muted uppercase tracking-widest mb-6 flex items-center gap-3">
            <span class="text-anime-secondary">◆</span>
            Tech Arsenal
          </h3>

          <div class="grid grid-cols-3 sm:grid-cols-4 gap-3">
            <div
              v-for="tech in allTechIcons"
              :key="tech.name"
              :ref="el => { if (el) iconEls.push(el) }"
              class="tech-icon-card glass-card p-4 rounded-sm flex flex-col items-center gap-2 cursor-default group transition-all duration-300 hover:border-anime-primary/40 relative overflow-hidden"
              style="border: 1px solid rgba(255,255,255,0.06)"
            >
              <span class="text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">{{ tech.icon }}</span>
              <span class="text-xs text-anime-muted group-hover:text-anime-text transition-colors duration-200 text-center leading-tight font-medium">{{ tech.name }}</span>
              <div class="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                :style="`box-shadow: inset 0 0 20px ${tech.color}15`"
              />
            </div>
          </div>

          <!-- Timeline -->
          <div class="mt-10 space-y-3">
            <h3 class="text-xs text-anime-muted uppercase tracking-widest mb-5 flex items-center gap-3">
              <span class="text-anime-accent">◆</span>
              Journey
            </h3>
            <div v-for="(item, i) in timeline" :key="i" class="timeline-item flex gap-4 group">
              <div class="flex flex-col items-center">
                <div class="w-2 h-2 rounded-full mt-1.5 flex-shrink-0 transition-all duration-300 group-hover:scale-150"
                  :style="`background: ${item.color}; box-shadow: 0 0 8px ${item.color}`"
                />
                <div v-if="i < timeline.length - 1" class="w-px flex-1 mt-1" style="background: rgba(255,255,255,0.08)" />
              </div>
              <div class="pb-5">
                <div class="flex items-center gap-2 mb-0.5">
                  <span class="text-xs font-mono text-anime-muted">{{ item.year }}</span>
                  <span class="text-xs px-1.5 py-0.5 rounded-sm font-bold"
                    :style="`background: ${item.color}18; color: ${item.color}`"
                  >{{ item.tag }}</span>
                </div>
                <p class="text-sm font-semibold text-anime-text group-hover:text-anime-primary transition-colors duration-200">{{ item.title }}</p>
                <p class="text-xs text-anime-muted mt-0.5">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUpdate } from 'vue'
import { gsap }          from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef  = ref(null)
const headerRef   = ref(null)
const tabsRef     = ref(null)
const barsRef     = ref(null)
const iconsRef    = ref(null)
const barFillEls  = ref([])
const iconEls     = ref([])

onBeforeUpdate(() => {
  barFillEls.value = []
  iconEls.value    = []
})

const activeCategory = ref('frontend')
const categories = [
  { id: 'frontend', label: 'Frontend', icon: '🎨' },
  { id: 'backend',  label: 'Backend',  icon: '⚙️' },
  { id: 'design',   label: 'Design',   icon: '✏️' },
  { id: 'tools',    label: 'Tools',    icon: '🔧' },
]

const skillsData = {
  frontend: [
    { name: 'Vue.js / Nuxt',  icon: '💚', level: 92, badge: 'Expert',   color: '#42b883', colorEnd: '#35495e' },
    { name: 'React / Next',   icon: '⚛️',  level: 80, badge: 'Advanced', color: '#61DAFB', colorEnd: '#0088CC' },
    { name: 'TypeScript',     icon: '💙', level: 78, badge: 'Advanced', color: '#3178C6', colorEnd: '#235a97' },
    { name: 'GSAP',           icon: '✨', level: 85, badge: 'Expert',   color: '#FF6B9D', colorEnd: '#C084FC' },
    { name: 'Tailwind CSS',   icon: '🎨', level: 95, badge: 'Expert',   color: '#38BDF8', colorEnd: '#0ea5e9' },
    { name: 'Three.js',       icon: '🌐', level: 60, badge: 'Mid',      color: '#C084FC', colorEnd: '#7c3aed' },
  ],
  backend: [
    { name: 'Node.js',         icon: '🟢', level: 75, badge: 'Advanced', color: '#68A063', colorEnd: '#3f7a3a' },
    { name: 'Express / Hono',  icon: '⚡', level: 72, badge: 'Advanced', color: '#FF6B9D', colorEnd: '#e11d48' },
    { name: 'MongoDB',         icon: '🍃', level: 70, badge: 'Advanced', color: '#47A248', colorEnd: '#2d6e2e' },
    { name: 'PostgreSQL',      icon: '🐘', level: 62, badge: 'Mid',      color: '#336791', colorEnd: '#1a3a56' },
    { name: 'REST / GraphQL',  icon: '🔗', level: 80, badge: 'Advanced', color: '#E535AB', colorEnd: '#9c1a71' },
    { name: 'Docker',          icon: '🐳', level: 55, badge: 'Mid',      color: '#2496ED', colorEnd: '#0e5fa0' },
  ],
  design: [
    { name: 'Figma',           icon: '🎭', level: 88, badge: 'Expert',   color: '#F24E1E', colorEnd: '#b53a17' },
    { name: 'UI/UX Design',    icon: '🖌️', level: 82, badge: 'Advanced', color: '#FF6B9D', colorEnd: '#C084FC' },
    { name: 'Motion Design',   icon: '🎬', level: 75, badge: 'Advanced', color: '#C084FC', colorEnd: '#38BDF8' },
    { name: 'Illustrator',     icon: '✏️', level: 65, badge: 'Mid',      color: '#FF9A00', colorEnd: '#e67e00' },
    { name: 'Prototyping',     icon: '📐', level: 85, badge: 'Expert',   color: '#38BDF8', colorEnd: '#0ea5e9' },
    { name: 'Design Systems',  icon: '🏗️', level: 80, badge: 'Advanced', color: '#FF6B9D', colorEnd: '#e11d48' },
  ],
  tools: [
    { name: 'Git / GitHub',    icon: '🐙', level: 90, badge: 'Expert',   color: '#F05032', colorEnd: '#b03825' },
    { name: 'Vite / Webpack',  icon: '⚡', level: 82, badge: 'Advanced', color: '#646CFF', colorEnd: '#4338ca' },
    { name: 'VS Code',         icon: '💻', level: 95, badge: 'Expert',   color: '#007ACC', colorEnd: '#005a96' },
    { name: 'Linux / CLI',     icon: '🐧', level: 72, badge: 'Advanced', color: '#38BDF8', colorEnd: '#0ea5e9' },
    { name: 'Vercel / Netlify',icon: '🚀', level: 88, badge: 'Expert',   color: '#C084FC', colorEnd: '#7c3aed' },
    { name: 'Jest / Vitest',   icon: '🧪', level: 68, badge: 'Mid',      color: '#C21325', colorEnd: '#8b0d1a' },
  ],
}

const activeSkills = computed(() => skillsData[activeCategory.value] || [])

const allTechIcons = [
  { name: 'Vue.js',     icon: '💚', color: '#42b883' },
  { name: 'React',      icon: '⚛️',  color: '#61DAFB' },
  { name: 'TypeScript', icon: '📘', color: '#3178C6' },
  { name: 'Node.js',    icon: '🟢', color: '#68A063' },
  { name: 'Tailwind',   icon: '🎨', color: '#38BDF8' },
  { name: 'GSAP',       icon: '✨', color: '#FF6B9D' },
  { name: 'Figma',      icon: '🎭', color: '#F24E1E' },
  { name: 'Vite',       icon: '⚡', color: '#646CFF' },
  { name: 'Git',        icon: '🐙', color: '#F05032' },
  { name: 'Docker',     icon: '🐳', color: '#2496ED' },
  { name: 'MongoDB',    icon: '🍃', color: '#47A248' },
  { name: 'Vercel',     icon: '🚀', color: '#C084FC' },
]

const timeline = [
  { year: '2021', title: 'Started Web Dev Journey',  desc: 'HTML, CSS, vanilla JS — fell in love with the web',      tag: 'Origin', color: '#38BDF8' },
  { year: '2022', title: 'Vue.js & React Deep Dive', desc: 'Built first SPA, discovered component-based design',     tag: 'Growth', color: '#42b883' },
  { year: '2023', title: 'Freelance & OSS',          desc: 'First paid clients, published open-source packages',     tag: 'Pro',    color: '#C084FC' },
  { year: '2024', title: 'Animation & Design Sys.',  desc: 'GSAP mastery, built Yuki UI Kit, 40+ projects shipped',  tag: 'Now',    color: '#FF6B9D' },
]

function animateBars() {
  barFillEls.value.forEach((el, i) => {
    if (!el) return
    const skill = activeSkills.value[i]
    if (!skill) return
    gsap.fromTo(el,
      { width: '0%' },
      { width: `${skill.level}%`, duration: 1.2, delay: i * 0.08, ease: 'power2.out' }
    )
  })
}

watch(activeCategory, () => {
  setTimeout(animateBars, 80)
  gsap.fromTo(iconEls.value,
    { opacity: 0.3, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 0.3, stagger: 0.03, ease: 'power2.out', delay: 0.05 }
  )
})

onMounted(() => {
  gsap.set([headerRef.value, tabsRef.value, barsRef.value, iconsRef.value], { y: 30 })

  gsap.to(headerRef.value, {
    opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    scrollTrigger: { trigger: headerRef.value, start: 'top 85%' },
  })
  gsap.to(tabsRef.value, {
    opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
    scrollTrigger: { trigger: tabsRef.value, start: 'top 85%' },
  })
  gsap.to(barsRef.value, {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
    scrollTrigger: {
      trigger: barsRef.value, start: 'top 80%',
      onEnter: () => setTimeout(animateBars, 200),
    },
  })
  gsap.to(iconsRef.value, {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
    scrollTrigger: {
      trigger: iconsRef.value, start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(iconEls.value,
          { opacity: 0, scale: 0.8, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'back.out(1.4)' }
        )
      },
    },
  })
})
</script>

<style scoped>
.skill-bar-enter-active, .skill-bar-leave-active { transition: all 0.3s ease; }
.skill-bar-enter-from,  .skill-bar-leave-to      { opacity: 0; transform: translateX(-12px); }

.tech-icon-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,107,157,0.2);
}
</style>