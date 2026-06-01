<template>
  <span
    class="glitch-text"
    :class="[sizeClass, weightClass, colorClass, { 'active': isGlitching }]"
    :data-text="text"
    @mouseenter="triggerGlitch"
  >{{ text }}</span>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  text:       { type: String,  required: true },
  size:       { type: String,  default: 'inherit' }, // xs sm base lg xl 2xl 3xl 4xl 5xl 6xl 7xl 8xl
  weight:     { type: String,  default: 'black' },   // normal medium semibold bold black
  color:      { type: String,  default: 'white' },   // white pink purple cyan gradient
  autoGlitch: { type: Boolean, default: true },
  interval:   { type: Number,  default: 4000 },      // ms between auto glitches
})

const isGlitching = ref(false)
let glitchTimer   = null
let autoTimer     = null

const sizeClass = computed(() => props.size !== 'inherit' ? `text-${props.size}` : '')
const weightClass = computed(() => `font-${props.weight}`)
const colorClass = computed(() => ({
  white:    'text-anime-text',
  pink:     'text-anime-primary',
  purple:   'text-anime-secondary',
  cyan:     'text-anime-accent',
  gradient: 'gradient-text',
}[props.color] || 'text-anime-text'))

function triggerGlitch() {
  if (isGlitching.value) return
  isGlitching.value = true
  clearTimeout(glitchTimer)
  glitchTimer = setTimeout(() => {
    isGlitching.value = false
  }, 600)
}

function startAutoGlitch() {
  if (!props.autoGlitch) return
  autoTimer = setInterval(triggerGlitch, props.interval)
}

onMounted(() => {
  // Small random offset so multiple instances don't sync
  const offset = Math.random() * props.interval
  setTimeout(startAutoGlitch, offset)
})

onUnmounted(() => {
  clearInterval(autoTimer)
  clearTimeout(glitchTimer)
})
</script>

<style scoped>
.glitch-text {
  position: relative;
  display: inline-block;
  cursor: default;
}

/* ── Before pseudo (cyan offset) ─── */
.glitch-text::before {
  content: attr(data-text);
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  color: #38BDF8;
  clip-path: inset(0 0 100% 0);
  pointer-events: none;
}

/* ── After pseudo (pink offset) ──── */
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  color: #C084FC;
  clip-path: inset(0 0 100% 0);
  pointer-events: none;
}

/* ── Active glitch state ──────────── */
.glitch-text.active::before {
  animation: glitch-before 0.6s steps(1) forwards;
}
.glitch-text.active::after {
  animation: glitch-after  0.6s steps(1) 0.05s forwards;
}
.glitch-text.active {
  animation: glitch-main   0.6s steps(1) 0.03s forwards;
}

/* ── Keyframes ────────────────────── */
@keyframes glitch-main {
  0%  { transform: translate(0); }
  10% { transform: translate(-3px,  1px); }
  20% { transform: translate( 3px, -1px); }
  30% { transform: translate(-2px,  2px); }
  40% { transform: translate( 2px, -2px); }
  50% { transform: translate( 0,    1px); }
  60% { transform: translate(-1px,  0);   }
  70% { transform: translate( 1px, -1px); }
  80% { transform: translate( 0,    0);   }
  100%{ transform: translate(0); }
}

@keyframes glitch-before {
  0%  { clip-path: inset(0 0 100% 0); transform: translate(0); }
  10% { clip-path: inset(10% 0 60% 0); transform: translate(-5px, 2px); }
  20% { clip-path: inset(50% 0 20% 0); transform: translate( 5px,-2px); }
  30% { clip-path: inset(30% 0 40% 0); transform: translate(-3px, 3px); }
  40% { clip-path: inset(70% 0 10% 0); transform: translate( 4px,-1px); }
  50% { clip-path: inset(15% 0 55% 0); transform: translate(-2px, 1px); }
  60% { clip-path: inset(80% 0  5% 0); transform: translate( 3px,-3px); }
  70% { clip-path: inset(40% 0 35% 0); transform: translate(-4px, 2px); }
  80% { clip-path: inset(5%  0 80% 0); transform: translate( 2px,-1px); }
  90% { clip-path: inset(0 0 100% 0);  transform: translate(0); }
  100%{ clip-path: inset(0 0 100% 0);  transform: translate(0); }
}

@keyframes glitch-after {
  0%  { clip-path: inset(0 0 100% 0); transform: translate(0); }
  10% { clip-path: inset(40% 0 30% 0); transform: translate( 6px,-3px); }
  20% { clip-path: inset(20% 0 50% 0); transform: translate(-6px, 3px); }
  30% { clip-path: inset(65% 0 15% 0); transform: translate( 4px,-2px); }
  40% { clip-path: inset(5%  0 75% 0); transform: translate(-5px, 4px); }
  50% { clip-path: inset(45% 0 25% 0); transform: translate( 3px,-1px); }
  60% { clip-path: inset(85% 0  3% 0); transform: translate(-2px, 2px); }
  70% { clip-path: inset(25% 0 55% 0); transform: translate( 5px,-3px); }
  80% { clip-path: inset(0 0 100% 0);  transform: translate(0); }
  100%{ clip-path: inset(0 0 100% 0);  transform: translate(0); }
}
</style>