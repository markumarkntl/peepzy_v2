<template>
  <footer class="relative overflow-hidden border-t border-anime-primary/10 bg-anime-darker">

    <!-- ── Background grid ─────────────────────── -->
    <div class="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />

    <!-- ── Top gradient line ───────────────────── -->
    <div class="h-px w-full border-shimmer opacity-60" />

    <div class="relative max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

        <!-- ── Brand ──────────────────────────── -->
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <span class="text-2xl text-anime-primary" style="filter: drop-shadow(0 0 8px var(--anime-primary))">✦</span>
            <span class="font-black tracking-widest text-sm uppercase">
              <span class="text-anime-primary">Asanagi's</span>
              <span class="text-anime-text">Home</span>
            </span>
          </div>
          <p class="text-anime-muted text-sm leading-relaxed max-w-xs">
            Creative developer crafting digital experiences with a touch of anime magic. ✨
          </p>
          <!-- Social icons -->
          <div class="flex items-center gap-4 pt-2">
            <a v-for="s in socials" :key="s.label"
               :href="s.url" target="_blank" rel="noopener noreferrer"
               class="social-icon w-9 h-9 flex items-center justify-center border border-white/10 rounded-sm text-anime-muted hover:text-anime-primary hover:border-anime-primary transition-all duration-300 text-sm"
               :title="s.label"
            >
              <span v-html="s.icon" />
            </a>
          </div>
        </div>

        <!-- ── Quick Links ─────────────────────── -->
        <div class="space-y-4">
          <h4 class="chapter-label">Navigation</h4>
          <ul class="space-y-2">
            <li v-for="item in navItems" :key="item.id">
              <a
                :href="`#${item.id}`"
                class="text-anime-muted hover:text-anime-primary text-sm transition-colors duration-200 flex items-center gap-2 group"
              >
                <span class="text-anime-primary/40 text-xs group-hover:text-anime-primary transition-colors">{{ item.num }}</span>
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- ── Status / Contact ────────────────── -->
        <div class="space-y-4">
          <h4 class="chapter-label">Status</h4>
          <div class="space-y-3">
            <!-- Available indicator -->
            <div class="flex items-center gap-3">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span class="text-sm text-anime-text">Available for work</span>
            </div>
            <p class="text-anime-muted text-sm">Based in Indonesia 🇮🇩</p>
            <a href="mailto:sanrioyumec@gmail.com"
            class="inline-flex items-center gap-2 text-sm text-anime-primary hover:glow-pink transition-all duration-300">
            sanrioyumec@gmail.com
            </a>
          </div>

          <!-- Tech stack badges -->
          <div class="pt-2">
            <p class="text-xs text-anime-muted mb-2 uppercase tracking-wider">Built with</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in techStack" :key="tech"
                class="px-2 py-1 text-xs border border-white/10 text-anime-muted rounded-sm hover:border-anime-primary/40 hover:text-anime-primary transition-all duration-200">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- ── Divider ─────────────────────────────── -->
      <div class="h-px bg-gradient-to-r from-transparent via-anime-primary/20 to-transparent mb-8" />

      <!-- ── Bottom bar ──────────────────────────── -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-anime-muted">
        <p>
          © {{ new Date().getFullYear() }}
          <span class="text-anime-primary font-semibold">Yuki.dev</span>
          — Crafted with
          <span class="text-anime-primary">♥</span>
          & lots of matcha 🍵
        </p>
        <div class="flex items-center gap-1 opacity-60">
          <span class="inline-block w-1.5 h-1.5 rounded-full bg-anime-primary animate-pulse" />
          <span>All systems nominal</span>
        </div>
        <p class="font-mono tracking-wider">
          <span class="text-anime-primary/60">{ </span>
          vue · gsap · tailwind
          <span class="text-anime-primary/60"> }</span>
        </p>
      </div>
    </div>

    <!-- ── Decorative corner kanji ──────────────── -->
    <div class="absolute bottom-4 right-6 text-6xl font-black text-white/[0.02] select-none pointer-events-none leading-none">
      終
    </div>
  </footer>
</template>

<script setup>
const navItems = [
  { id: 'hero',     label: 'Home',     num: '01' },
  { id: 'about',    label: 'About',    num: '02' },
  { id: 'projects', label: 'Projects', num: '03' },
  { id: 'skills',   label: 'Skills',   num: '04' },
  { id: 'contact',  label: 'Contact',  num: '05' },
]

const socials = [
  { label: 'GitHub',    url: 'https://github.com/markumarkntl',        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>' },
  { label: 'Twitter',   url: 'https://twitter.com/pespzy',             icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>' },
  { label: 'Instagram', url: 'https://instagram.com/exclusiveryzz',    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>' },
  { label: 'Discord',   url: 'https://discord.com/users/peepzyishere', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.003.028.015.056.036.071a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .036-.071c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>' },
]

const techStack = ['Vue 3', 'GSAP', 'Tailwind', 'Vite', 'Lenis']
</script>

<style scoped>
.social-icon:hover {
  box-shadow: 0 0 12px rgba(255, 107, 157, 0.3);
  transform: translateY(-2px);
}
</style>