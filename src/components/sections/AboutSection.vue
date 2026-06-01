<template>
  <section
    id="about"
    ref="sectionRef"
    class="relative py-28 lg:py-36 bg-anime-darker overflow-hidden"
  >
    <!-- ── Background decoration ──────────────── -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Grid -->
      <div class="absolute inset-0 opacity-[0.03]"
        style="background-image: linear-gradient(rgba(255,107,157,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,157,0.8) 1px, transparent 1px); background-size: 60px 60px;"
      />
      <!-- Orb left -->
      <div class="absolute -left-32 top-1/4 w-96 h-96 rounded-full blur-3xl"
        style="background: rgba(255,107,157,0.06)" />
      <!-- Orb right -->
      <div class="absolute -right-32 bottom-1/4 w-80 h-80 rounded-full blur-3xl"
        style="background: rgba(192,132,252,0.06)" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

      <!-- ── Section header ─────────────────────── -->
      <div ref="headerRef" class="mb-16 opacity-0">
        <p class="chapter-label mb-3 flex items-center gap-3">
          <span class="inline-block w-8 h-px bg-anime-primary" />
          Chapter 02
        </p>
        <h2 class="text-4xl lg:text-5xl font-black text-anime-text">
          About <span class="gradient-text">Me</span>
        </h2>
      </div>

      <!-- ── Main grid ──────────────────────────── -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        <!-- ══ LEFT — Profile card ════════════════ -->
        <div ref="cardRef" class="opacity-0">
          <div class="profile-card relative">

            <!-- Manga-style corner brackets -->
            <div class="bracket bracket-tl" />
            <div class="bracket bracket-tr" />
            <div class="bracket bracket-bl" />
            <div class="bracket bracket-br" />

            <!-- Card inner -->
            <div class="glass-card p-1 rounded-sm">
              <!-- Image area -->
              <div class="relative overflow-hidden rounded-sm aspect-[4/5] bg-anime-dark">
                <img
                  src="/images/character-mobile.jpg"
                  alt="Profile"
                  loading="lazy"
                  class="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  style="filter: saturate(1.1) contrast(1.05);"
                />
                <!-- Gradient overlay -->
                <div class="absolute inset-0"
                  style="background: linear-gradient(to top, rgba(5,5,8,0.7) 0%, transparent 50%)"
                />
                <!-- Name tag -->
                <div class="absolute bottom-4 left-4 right-4">
                  <p class="text-xs text-anime-primary uppercase tracking-widest mb-1 font-semibold">// Character Profile</p>
                  <h3 class="text-xl font-black text-white">peepsy</h3>
                  <p class="text-sm text-anime-muted">Frontend Developer</p>
                </div>
                <!-- Status badge -->
                <div class="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-bold"
                  style="background: rgba(5,5,8,0.8); border: 1px solid rgba(255,107,157,0.3)"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping absolute" />
                  <span class="w-1.5 h-1.5 rounded-full bg-green-400 relative" />
                  <span class="text-anime-text ml-1">Available</span>
                </div>
              </div>

              <!-- Card footer tags -->
              <div class="p-4 flex flex-wrap gap-2">
                <span v-for="tag in profileTags" :key="tag"
                  class="px-3 py-1 text-xs font-semibold border border-anime-primary/20 text-anime-muted rounded-sm hover:border-anime-primary hover:text-anime-primary transition-all duration-200 cursor-default"
                >{{ tag }}</span>
              </div>
            </div>

            <!-- Decorative side label -->
            <div class="absolute -right-8 top-1/2 -translate-y-1/2 -rotate-90 hidden lg:block">
              <p class="text-xs text-anime-primary/30 tracking-[0.4em] uppercase font-bold whitespace-nowrap">
                Asanagi Umi
              </p>
            </div>
          </div>
        </div>

        <!-- ══ RIGHT — Bio + Stats ════════════════ -->
        <div ref="bioRef" class="opacity-0 space-y-8">

          <!-- Bio text -->
          <div class="space-y-4">
            <p class="text-anime-text text-base lg:text-lg leading-relaxed">
              Hi! I'm a
              <span class="text-anime-primary font-bold">web and mobile Developer</span>
              with a strong passion for
              <span class="text-anime-secondary font-bold">frontend development and UI/UX design."</span>
            </p>
            <p class="text-anime-muted text-sm lg:text-base leading-relaxed">
              With just over a year of experience, I focus on using Vue.js and Laravel to build clean, highly interactive websites that actually catch people's attention
            </p>
            <p class="text-anime-muted text-sm lg:text-base leading-relaxed">
              My goal: build experiences that make people say
              <span class="text-anime-accent font-semibold italic">"sugoi!"</span> ✨
            </p>
          </div>

          <!-- ── Stats grid ────────────────────── -->
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="(stat, i) in stats"
              :key="stat.label"
              class="stat-card glass-card p-5 rounded-sm border border-white/5 hover:border-anime-primary/30 transition-all duration-300 group"
            >
              <div class="flex items-start justify-between mb-2">
                <span class="text-2xl">{{ stat.icon }}</span>
                <span class="text-xs text-anime-primary/50 font-mono">0{{ i + 1 }}</span>
              </div>
              <div class="text-3xl font-black text-anime-text mb-1">
                <span :ref="el => statEls[i] = el">0</span>{{ stat.suffix }}
              </div>
              <p class="text-xs text-anime-muted uppercase tracking-wider">{{ stat.label }}</p>
              <!-- Bottom accent line -->
              <div class="mt-3 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                :style="`background: linear-gradient(90deg, ${stat.color}, transparent)`"
              />
            </div>
          </div>

          <!-- ── Current status ────────────────── -->
          <div class="flex items-center gap-4 p-4 glass-card rounded-sm border border-anime-primary/10">
            <div class="text-2xl flex-shrink-0">🎧</div>
            <div>
              <p class="text-xs text-anime-muted uppercase tracking-wider mb-0.5">Currently</p>
              <p class="text-sm text-anime-text font-medium">
                Building awesome things with Vue.js & GSAP
              </p>
            </div>
          </div>

          <!-- ── CTA ───────────────────────────── -->
          <div class="flex flex-wrap gap-4">
            <a href="#projects"
               @click.prevent="scrollTo('projects')"
               class="inline-flex items-center gap-2 px-5 py-2.5 bg-anime-primary text-anime-darker text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-anime-secondary transition-colors duration-300 glow-pulse-pink"
            >
              ⚡ My Work
            </a>
            <a href="/resume.pdf" download
               class="inline-flex items-center gap-2 px-5 py-2.5 border border-anime-muted/30 text-anime-muted text-sm font-bold uppercase tracking-widest rounded-sm hover:border-anime-primary hover:text-anime-primary transition-all duration-300"
            >
              ↓ Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap }            from 'gsap'
import { ScrollTrigger }   from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ── Refs ────────────────────────────────────────
const sectionRef = ref(null)
const headerRef  = ref(null)
const cardRef    = ref(null)
const bioRef     = ref(null)
const statEls    = ref([])

// ── Data ────────────────────────────────────────
const profileTags = [
  'HTML', 'CSS', 'PHP', 'GSAP', 'Javascript', 'Tailwind', 'Laravel',
  'Vue.js', 'Node.js', 'React.js', 'React Native', 'Python',
]

const stats = [
  { label: 'Projects Done',    value: 10,  suffix: '+', icon: '🚀', color: '#FF6B9D' },
  { label: 'Years Experience', value: 1,   suffix: '+', icon: '⚡', color: '#C084FC' },
  { label: 'Age',    value: 17,  suffix: '+', icon: '😊', color: '#38BDF8' },
  { label: 'GitHub Stars',     value: 5, suffix: '+', icon: '⭐', color: '#FF6B9D' },
]

// ── Counter animation ────────────────────────────
function animateCounter(el, target, duration = 1.8) {
  const obj = { val: 0 }
  gsap.to(obj, {
    val: target,
    duration,
    ease: 'power2.out',
    onUpdate() {
      if (el) el.textContent = Math.round(obj.val)
    },
  })
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

// ── GSAP ScrollTrigger ───────────────────────────
onMounted(() => {
  // Header
  gsap.to(headerRef.value, {
    opacity: 1, y: 0,
    duration: 0.7,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: headerRef.value,
      start: 'top 85%',
    },
  })

  // Profile card — slide from left
  gsap.fromTo(cardRef.value,
    { opacity: 0, x: -50 },
    {
      opacity: 1, x: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cardRef.value,
        start: 'top 80%',
      },
    }
  )

  // Bio — slide from right
  gsap.fromTo(bioRef.value,
    { opacity: 0, x: 50 },
    {
      opacity: 1, x: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: bioRef.value,
        start: 'top 80%',
        onEnter: () => {
          // Trigger stat counters
          stats.forEach((stat, i) => {
            setTimeout(() => {
              animateCounter(statEls.value[i], stat.value)
            }, i * 150)
          })
        },
      },
    }
  )

  // Initial y offset
  gsap.set([headerRef.value, cardRef.value, bioRef.value], { y: 30 })
})
</script>

<style scoped>
/* ── Profile card manga brackets ─────── */
.profile-card { position: relative; padding: 12px; }

.bracket {
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: var(--anime-primary);
  border-style: solid;
  z-index: 2;
}
.bracket-tl { top: 0;    left: 0;  border-width: 2px 0 0 2px; }
.bracket-tr { top: 0;    right: 0; border-width: 2px 2px 0 0; }
.bracket-bl { bottom: 0; left: 0;  border-width: 0 0 2px 2px; }
.bracket-br { bottom: 0; right: 0; border-width: 0 2px 2px 0; }

/* ── Stat card hover ──────────────────── */
.stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(255,107,157,0.1);
}
</style>