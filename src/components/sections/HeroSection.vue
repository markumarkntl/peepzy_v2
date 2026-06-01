<template>
  <section
    id="hero"
    ref="heroRef"
    class="relative min-h-screen flex items-center overflow-hidden bg-anime-darker"
  >
    <!-- ── Particle Background ──────────────────── -->
    <ParticleBackground />

    <!-- ── Sakura Petals (mobile) ──────────────── -->
    <SakuraPetals :count="20" :mobile-only="true" />

    <!-- ── Noise texture overlay ───────────────── -->
    <div class="noise-overlay absolute inset-0 pointer-events-none z-[1]" />

    <!-- ── Desktop scanline overlay ───────────── -->
    <div class="hidden lg:block absolute inset-0 pointer-events-none z-[2] opacity-30"
      style="background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.015) 2px, rgba(0,0,0,0.015) 4px)"
    />

    <!-- ════════════════════════════════════════════
         DESKTOP CHARACTER IMAGE (right side)
         ════════════════════════════════════════════ -->
    <div
      ref="characterWrapRef"
      class="character-desktop hidden lg:block absolute right-0 bottom-0 z-[3] pointer-events-none"
      style="width: 45vw; height: 90vh;"
    >
      <img
        src="/images/character-desktop.png"
        alt="Anime character"
        loading="eager"
        class="character-img w-full h-full object-contain object-bottom"
        style="
          mix-blend-mode: screen;
          opacity: 0.85;
          filter: drop-shadow(0 0 40px rgba(255,107,157,0.3));
        "
      />
      <!-- Hover glow ring -->
      <div class="character-glow absolute inset-0 rounded-full pointer-events-none opacity-0 transition-opacity duration-500"
        style="background: radial-gradient(ellipse at center bottom, rgba(255,107,157,0.2) 0%, transparent 70%)"
      />
    </div>

    <!-- ════════════════════════════════════════════
         MOBILE CHARACTER IMAGE (background)
         ════════════════════════════════════════════ -->
    <div
      ref="mobileCharRef"
      class="character-mobile lg:hidden absolute inset-0 z-[1] pointer-events-none"
    >
      <img
        src="/images/character-mobile-dark.jpg"
        alt=""
        loading="eager"
        class="w-full h-full object-cover object-top"
        style="opacity: 0.15; mix-blend-mode: luminosity;"
      />
      <!-- Mobile gradient overlay -->
      <div class="absolute inset-0"
        style="background: linear-gradient(to bottom, rgba(5,5,8,0.3) 0%, rgba(5,5,8,0.7) 100%)"
      />
    </div>

    <!-- ════════════════════════════════════════════
         MAIN CONTENT
         ════════════════════════════════════════════ -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16">
      <div class="lg:w-[55%] xl:w-[50%] space-y-6">

        <!-- Chapter label -->
        <div ref="labelRef" class="chapter-label opacity-0 flex items-center gap-3">
          <span class="inline-block w-8 h-px bg-anime-primary" />
          Chapter 01 — Introduction
          <span class="inline-block w-8 h-px bg-anime-primary" />
        </div>

        <!-- ── Greeting ───────────────────────── -->
        <p ref="greetRef" class="text-anime-muted text-sm lg:text-base font-medium tracking-widest uppercase opacity-0">
          Hello, I'm
        </p>

        <!-- ── Glitch Name ────────────────────── -->
        <div ref="nameRef" class="opacity-0">
          <GlitchText
            text="peepsy "
            size="6xl"
            weight="black"
            color="white"
            :auto-glitch="true"
            :interval="3500"
            class="leading-none tracking-tight lg:text-7xl xl:text-8xl block"
          />
          <!-- Glow underline -->
          <div class="mt-2 h-1 w-32 rounded-full"
            style="background: linear-gradient(90deg, var(--anime-primary), var(--anime-secondary), transparent)"
          />
        </div>

        <!-- ── Typing Subtitle ────────────────── -->
        <div ref="subtitleRef" class="opacity-0 h-8 flex items-center">
          <span class="text-lg lg:text-xl text-anime-muted font-light">
            {{ displayedText }}<span class="typing-cursor" />
          </span>
        </div>

        <!-- ── Bio ───────────────────────────── -->
        <p ref="bioRef" class="opacity-0 text-anime-muted text-sm lg:text-base leading-relaxed max-w-md">
          I craft immersive digital experiences where
          <span class="text-anime-primary font-semibold">code meets creativity</span>.
          From designing intuitive interfaces to building robust web and mobile applications, I blend modern frameworks like Vue.js and Laravel into seamless,
          <span class="text-anime-secondary font-semibold">aesthetic products</span>.
        </p>

        <!-- ── CTA Buttons ────────────────────── -->
        <div ref="ctaRef" class="opacity-0 flex flex-wrap gap-4 pt-2">
          <!-- Primary CTA -->
          <a
            href="#projects"
            @click.prevent="scrollTo('projects')"
            class="cta-primary group relative inline-flex items-center gap-2 px-6 py-3 font-bold text-sm uppercase tracking-widest overflow-hidden rounded-sm transition-all duration-300"
          >
            <span class="relative z-10 flex items-center gap-2">
              <span>⚡</span> View Projects
            </span>
            <div class="cta-bg absolute inset-0 bg-gradient-to-r from-anime-primary to-anime-secondary transition-all duration-300" />
            <div class="cta-shine absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style="background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)"
            />
          </a>

          <!-- Secondary CTA -->
          <a
            href="#contact"
            @click.prevent="scrollTo('contact')"
            class="cta-secondary group relative inline-flex items-center gap-2 px-6 py-3 font-bold text-sm uppercase tracking-widest border border-anime-primary text-anime-primary rounded-sm transition-all duration-300 hover:bg-anime-primary/10 btn-ripple overflow-hidden"
          >
            <span>✉</span> Contact Me
            <span class="absolute bottom-0 left-0 w-0 h-px bg-anime-primary group-hover:w-full transition-all duration-300" />
          </a>
        </div>

        <!-- ── Social quick links ─────────────── -->
        <div ref="socialRef" class="opacity-0 flex items-center gap-4 pt-4">
          <span class="text-xs text-anime-muted uppercase tracking-widest">Follow</span>
          <div class="w-8 h-px bg-anime-muted/30" />
          <div class="flex gap-3">
            <a v-for="s in quickSocials" :key="s.label"
               :href="s.url" target="_blank" rel="noopener"
               class="text-anime-muted hover:text-anime-primary transition-colors duration-200 text-xs uppercase tracking-widest font-semibold"
            >{{ s.label }}</a>
          </div>
        </div>
      </div>
    </div>

    <!-- ── Scroll indicator ──────────────────── -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
      <span class="text-xs text-anime-muted uppercase tracking-widest">Scroll</span>
      <div class="w-px h-12 bg-gradient-to-b from-anime-primary to-transparent animate-pulse" />
    </div>

    <!-- ── Bottom gradient fade ──────────────── -->
    <div class="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-[4]"
      style="background: linear-gradient(to bottom, transparent, var(--anime-darker))"
    />
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import GlitchText         from '@/components/effects/GlitchText.vue'
import ParticleBackground from '@/components/effects/ParticleBackground.vue'
import SakuraPetals       from '@/components/effects/SakuraPetals.vue'

// ── Refs ────────────────────────────────────────
const heroRef         = ref(null)
const characterWrapRef = ref(null)
const mobileCharRef   = ref(null)
const labelRef        = ref(null)
const greetRef        = ref(null)
const nameRef         = ref(null)
const subtitleRef     = ref(null)
const bioRef          = ref(null)
const ctaRef          = ref(null)
const socialRef       = ref(null)

// ── Typing animation ────────────────────────────
const typingStrings = [
  'Frontend Developer',
  'Laravel Developer',
  'UI/UX Designer',
  'Mobile Developer',
  'Web Developer',
]
const displayedText = ref('')
let   typingIndex   = 0
let   charIndex     = 0
let   isDeleting    = false
let   typingTimer   = null

function typeLoop() {
  const current = typingStrings[typingIndex]

  if (!isDeleting) {
    displayedText.value = current.slice(0, ++charIndex)
    if (charIndex === current.length) {
      isDeleting = true
      typingTimer = setTimeout(typeLoop, 1800)
      return
    }
  } else {
    displayedText.value = current.slice(0, --charIndex)
    if (charIndex === 0) {
      isDeleting = false
      typingIndex = (typingIndex + 1) % typingStrings.length
    }
  }
  typingTimer = setTimeout(typeLoop, isDeleting ? 40 : 80)
}

// ── Mouse parallax (mobile character) ──────────
function onMouseMove(e) {
  if (window.innerWidth >= 1024) return
  const x = (e.clientX / window.innerWidth  - 0.5) * 12
  const y = (e.clientY / window.innerHeight - 0.5) * 8
  if (mobileCharRef.value) {
    gsap.to(mobileCharRef.value, {
      x, y,
      duration: 1.2,
      ease: 'power2.out',
    })
  }
}

// ── Desktop character hover glow ────────────────
function onCharHover() {
  const glow = characterWrapRef.value?.querySelector('.character-glow')
  const img  = characterWrapRef.value?.querySelector('.character-img')
  if (!glow || !img) return
  gsap.to(glow, { opacity: 1, duration: 0.4 })
  gsap.to(img,  {
    filter: 'drop-shadow(0 0 60px rgba(255,107,157,0.6)) drop-shadow(0 0 100px rgba(192,132,252,0.3))',
    duration: 0.4,
  })
}
function onCharLeave() {
  const glow = characterWrapRef.value?.querySelector('.character-glow')
  const img  = characterWrapRef.value?.querySelector('.character-img')
  if (!glow || !img) return
  gsap.to(glow, { opacity: 0, duration: 0.4 })
  gsap.to(img,  {
    filter: 'drop-shadow(0 0 40px rgba(255,107,157,0.3))',
    duration: 0.4,
  })
}

// ── GSAP Entrance animation ──────────────────────
function runEntranceAnimation() {
  const tl = gsap.timeline({ delay: 0.3 })

  tl.to(labelRef.value,    { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0)
    .to(greetRef.value,    { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.15)
    .to(nameRef.value,     { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.3)
    .to(subtitleRef.value, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.5)
    .to(bioRef.value,      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.65)
    .to(ctaRef.value,      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.8)
    .to(socialRef.value,   { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.95)

  // Character slide in from right (desktop)
  if (characterWrapRef.value) {
    gsap.fromTo(characterWrapRef.value,
      { x: 80, opacity: 0 },
      { x: 0,  opacity: 1, duration: 1.1, ease: 'power3.out', delay: 0.5 }
    )
  }
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

// ── Lifecycle ───────────────────────────────────
onMounted(() => {
  // Set initial states for GSAP
  gsap.set([labelRef.value, greetRef.value, nameRef.value,
            subtitleRef.value, bioRef.value, ctaRef.value, socialRef.value],
    { y: 24 }
  )

  runEntranceAnimation()

  // Start typing after name appears
  setTimeout(typeLoop, 900)

  // Events
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  characterWrapRef.value?.addEventListener('mouseenter', onCharHover)
  characterWrapRef.value?.addEventListener('mouseleave', onCharLeave)
})

onUnmounted(() => {
  clearTimeout(typingTimer)
  window.removeEventListener('mousemove', onMouseMove)
  characterWrapRef.value?.removeEventListener('mouseenter', onCharHover)
  characterWrapRef.value?.removeEventListener('mouseleave', onCharLeave)
})

// ── Data ────────────────────────────────────────
const quickSocials = [
  { label: 'GitHub',   url: 'https://github.com' },
  { label: 'Twitter',  url: 'https://twitter.com' },
  { label: 'LinkedIn', url: 'https://linkedin.com' },
]
</script>

<style scoped>
/* ── CTA Primary ─────────────────────────── */
.cta-primary {
  color: var(--anime-darker);
  box-shadow:
    0 0 20px rgba(255,107,157,0.4),
    0 4px 15px rgba(0,0,0,0.3);
}
.cta-primary:hover {
  box-shadow:
    0 0 35px rgba(255,107,157,0.6),
    0 0 60px rgba(192,132,252,0.3),
    0 4px 20px rgba(0,0,0,0.4);
  transform: translateY(-2px);
}
.cta-primary:active {
  transform: translateY(0);
}

/* ── CTA Secondary ───────────────────────── */
.cta-secondary:hover {
  box-shadow: 0 0 20px rgba(255,107,157,0.2);
  transform: translateY(-2px);
}

/* ── Character image float ───────────────── */
.character-desktop {
  animation: char-float 7s ease-in-out infinite;
}
@keyframes char-float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-16px); }
}

/* ── Typing cursor blink ─────────────────── */
.typing-cursor {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background: var(--anime-primary);
  margin-left: 2px;
  vertical-align: middle;
  animation: cursor-blink 0.75s step-end infinite;
}
@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
</style>