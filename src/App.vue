<template>
  <div class="scanline-overlay">
    <!-- Custom Cursor (desktop only) -->
    <div
      ref="cursorOuter"
      class="cursor-outer hidden lg:block"
      :style="{ left: cursor.x + 'px', top: cursor.y + 'px' }"
    />
    <div
      ref="cursorInner"
      class="cursor-inner hidden lg:block"
      :style="{ left: cursorInner.x + 'px', top: cursorInner.y + 'px' }"
    />

    <!-- Router View with Transition -->
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ── Lenis Smooth Scroll ──────────────────────────
let lenis = null

onMounted(() => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    smooth: true,
  })

  // Connect Lenis to GSAP ticker
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  // Update ScrollTrigger on Lenis scroll
  lenis.on('scroll', ScrollTrigger.update)

  // Custom cursor
  window.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  lenis?.destroy()
  window.removeEventListener('mousemove', onMouseMove)
})

// ── Custom Cursor ────────────────────────────────
const cursor = reactive({ x: -100, y: -100 })
const cursorInner = reactive({ x: -100, y: -100 })

function onMouseMove(e) {
  cursor.x = e.clientX - 16
  cursor.y = e.clientY - 16
  gsap.to(cursorInner, {
    x: e.clientX - 4,
    y: e.clientY - 4,
    duration: 0.15,
    ease: 'power2.out',
  })
}
</script>

<style scoped>
/* ── Custom Cursor ────────────────────────────── */
.cursor-outer {
  position: fixed;
  width: 32px;
  height: 32px;
  border: 1.5px solid var(--anime-primary);
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
  transition: transform 0.1s ease;
  mix-blend-mode: difference;
}

.cursor-inner {
  position: fixed;
  width: 8px;
  height: 8px;
  background: var(--anime-primary);
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
}
</style>