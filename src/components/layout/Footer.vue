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
            <a href="mailto:hello@yuki.dev"
               class="inline-flex items-center gap-2 text-sm text-anime-primary hover:glow-pink transition-all duration-300">
              ✉ hello@yuki.dev
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
  { label: 'GitHub',   url: 'https://github.com',   icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>' },
  { label: 'Twitter',  url: 'https://twitter.com',  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>' },
  { label: 'LinkedIn', url: 'https://linkedin.com', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>' },
  { label: 'Dribbble', url: 'https://dribbble.com', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.017-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.073c.232-.38 3.105-5.087 8.363-6.77.22-.07.445-.14.673-.2-.27-.6-.563-1.21-.862-1.8C7.74 11.504 3.15 11.45 2.7 11.44l-.01.24c0 2.7.977 5.17 2.595 7.077zM2.8 9.828c.468.003 4.483.026 9.168-1.207-1.643-2.913-3.41-5.37-3.674-5.728-2.86 1.35-5.06 3.86-5.494 6.935zm7.393-7.16c.273.37 2.07 2.83 3.693 5.798 3.52-1.32 5.013-3.32 5.19-3.578C17.19 3.19 14.775 2.1 12.1 2.1c-.657 0-1.3.07-1.907.168zm9.163 3.905c-.213.29-1.873 2.43-5.55 3.94.23.477.45.97.65 1.46.07.19.14.38.21.57 3.38-.424 6.745.257 7.08.33-.02-2.42-.87-4.64-2.39-6.3z"/></svg>' },
]

const techStack = ['Vue 3', 'GSAP', 'Tailwind', 'Vite', 'Lenis']
</script>

<style scoped>
.social-icon:hover {
  box-shadow: 0 0 12px rgba(255, 107, 157, 0.3);
  transform: translateY(-2px);
}
</style>