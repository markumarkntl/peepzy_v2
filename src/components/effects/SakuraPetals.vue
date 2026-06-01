<template>
  <div
    v-if="show"
    class="sakura-container fixed inset-0 pointer-events-none z-10 overflow-hidden"
    aria-hidden="true"
  >
    <div
      v-for="petal in petals"
      :key="petal.id"
      class="sakura-petal absolute"
      :style="petal.style"
    >
      <!-- SVG sakura petal shape -->
      <svg
        :width="petal.size"
        :height="petal.size"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g :opacity="petal.opacity">
          <!-- 5-petal sakura flower (simplified) -->
          <path
            d="M20 20 C20 10 28 4 30 10 C32 16 26 18 20 20Z"
            :fill="petal.color"
          />
          <path
            d="M20 20 C30 20 36 28 30 30 C24 32 22 26 20 20Z"
            :fill="petal.color"
          />
          <path
            d="M20 20 C20 30 12 36 10 30 C8 24 14 22 20 20Z"
            :fill="petal.color"
          />
          <path
            d="M20 20 C10 20 4 12 10 10 C16 8 18 14 20 20Z"
            :fill="petal.color"
          />
          <path
            d="M20 20 C14 12 16 4 20 6 C24 8 26 16 20 20Z"
            :fill="petal.color"
          />
          <circle cx="20" cy="20" r="3" fill="white" :opacity="0.6" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  count:      { type: Number,  default: 18 },
  mobileOnly: { type: Boolean, default: true },
})

const windowWidth = ref(window.innerWidth)
const show = computed(() => !props.mobileOnly || windowWidth.value < 768)

const colors = [
  '#FF6B9D',   // sakura pink
  '#FFB7D5',   // light pink
  '#C084FC',   // purple
  '#FFC0CB',   // pastel pink
  '#FFD1DC',   // blush
  '#F9A8D4',   // rose
]

function rand(min, max) {
  return Math.random() * (max - min) + min
}

const petals = ref([])

function generatePetals() {
  petals.value = Array.from({ length: props.count }, (_, i) => {
    const duration = rand(7, 14)
    const delay    = rand(0, 12)
    const size     = rand(14, 28)
    const left     = rand(0, 100)

    return {
      id:      i,
      size,
      color:   colors[Math.floor(Math.random() * colors.length)],
      opacity: rand(0.5, 0.9),
      style: {
        left:       `${left}%`,
        top:        `-${size}px`,
        '--duration': `${duration}s`,
        '--delay':    `${delay}s`,
        animation:  [
          `sakura-fall-${(i % 3) + 1} ${duration}s linear ${delay}s infinite`,
          `sakura-sway ${duration * 0.45}s ease-in-out ${delay}s infinite`,
        ].join(', '),
        willChange: 'transform, opacity',
      },
    }
  })
}

function onResize() {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  generatePetals()
  window.addEventListener('resize', onResize, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<style scoped>
/* Fall paths — 3 variants for variety */
@keyframes sakura-fall-1 {
  0%   { transform: translateY(-5vh) translateX(0px)   rotate(0deg);   opacity: 0; }
  8%   { opacity: 0.85; }
  92%  { opacity: 0.6; }
  100% { transform: translateY(108vh) translateX(80px)  rotate(540deg); opacity: 0; }
}
@keyframes sakura-fall-2 {
  0%   { transform: translateY(-5vh) translateX(0px)   rotate(45deg);  opacity: 0; }
  8%   { opacity: 0.75; }
  92%  { opacity: 0.5; }
  100% { transform: translateY(108vh) translateX(-70px) rotate(-400deg);opacity: 0; }
}
@keyframes sakura-fall-3 {
  0%   { transform: translateY(-5vh) translateX(0px)   rotate(120deg); opacity: 0; }
  8%   { opacity: 0.95; }
  92%  { opacity: 0.4; }
  100% { transform: translateY(108vh) translateX(110px) rotate(660deg); opacity: 0; }
}

/* Horizontal sway */
@keyframes sakura-sway {
  0%, 100% { margin-left: 0px; }
  25%       { margin-left: 35px; }
  75%       { margin-left: -25px; }
}
</style>