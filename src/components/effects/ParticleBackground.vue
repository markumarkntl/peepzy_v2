<template>
  <div
    class="particle-bg absolute inset-0 overflow-hidden pointer-events-none"
    aria-hidden="true"
  >
    <!-- Floating orbs (large blurred circles) -->
    <div
      v-for="orb in orbs"
      :key="`orb-${orb.id}`"
      class="absolute rounded-full blur-3xl pointer-events-none"
      :style="orb.style"
    />

    <!-- Small star particles -->
    <div
      v-for="p in particles"
      :key="`p-${p.id}`"
      class="particle absolute rounded-full"
      :style="p.style"
    />

    <!-- Grid lines overlay -->
    <div
      class="absolute inset-0 opacity-[0.04]"
      style="
        background-image:
          linear-gradient(rgba(255,107,157,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,107,157,0.5) 1px, transparent 1px);
        background-size: 60px 60px;
      "
    />

    <!-- Radial vignette -->
    <div
      class="absolute inset-0"
      style="background: radial-gradient(ellipse at center, transparent 40%, rgba(5,5,8,0.8) 100%)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

// ── Floating blurred orbs ────────────────────────
const orbConfigs = [
  { color: 'rgba(255,107,157,0.12)', size: 600, x: 15,  y: 20,  duration: 18 },
  { color: 'rgba(192,132,252,0.10)', size: 500, x: 70,  y: 60,  duration: 22 },
  { color: 'rgba(56,189,248,0.08)',  size: 400, x: 45,  y: 80,  duration: 16 },
  { color: 'rgba(255,107,157,0.07)', size: 350, x: 85,  y: 15,  duration: 20 },
  { color: 'rgba(192,132,252,0.09)', size: 300, x: 5,   y: 75,  duration: 25 },
]

const orbs = ref(orbConfigs.map((o, i) => ({
  id: i,
  style: {
    width:      `${o.size}px`,
    height:     `${o.size}px`,
    left:       `calc(${o.x}% - ${o.size / 2}px)`,
    top:        `calc(${o.y}% - ${o.size / 2}px)`,
    background: o.color,
    animation:  `orb-drift ${o.duration}s ease-in-out ${i * 1.5}s infinite alternate`,
    willChange: 'transform',
  },
})))

// ── Small particles ──────────────────────────────
function rand(min, max) { return Math.random() * (max - min) + min }

const particleColors = [
  'rgba(255,107,157,0.6)',
  'rgba(192,132,252,0.5)',
  'rgba(56,189,248,0.5)',
  'rgba(255,255,255,0.3)',
]

const particles = ref(
  Array.from({ length: 55 }, (_, i) => {
    const size     = rand(1, 3.5)
    const duration = rand(5, 12)
    const delay    = rand(0, 10)
    return {
      id: i,
      style: {
        width:       `${size}px`,
        height:      `${size}px`,
        left:        `${rand(0, 100)}%`,
        top:         `${rand(0, 100)}%`,
        background:  particleColors[Math.floor(Math.random() * particleColors.length)],
        '--p-duration': `${duration}s`,
        '--p-delay':    `${delay}s`,
        animation:   `particle-drift ${duration}s ease-in-out ${delay}s infinite`,
        boxShadow:   size > 2.5
          ? `0 0 ${size * 2}px currentColor`
          : 'none',
        willChange: 'transform, opacity',
      },
    }
  })
)
</script>

<style scoped>
@keyframes orb-drift {
  0%   { transform: translate(0px,   0px)   scale(1); }
  33%  { transform: translate(30px, -20px)  scale(1.05); }
  66%  { transform: translate(-20px, 15px)  scale(0.97); }
  100% { transform: translate(15px,  25px)  scale(1.02); }
}

@keyframes particle-drift {
  0%   { transform: translateY(0)     translateX(0)     scale(1);   opacity: 0.7; }
  25%  { transform: translateY(-15px) translateX(10px)  scale(1.1); opacity: 1; }
  50%  { transform: translateY(-8px)  translateX(-8px)  scale(0.9); opacity: 0.8; }
  75%  { transform: translateY(-20px) translateX(5px)   scale(1.05);opacity: 0.9; }
  100% { transform: translateY(0)     translateX(0)     scale(1);   opacity: 0.7; }
}
</style>