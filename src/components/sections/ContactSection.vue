<template>
  <section
    id="contact"
    ref="sectionRef"
    class="relative py-28 lg:py-36 overflow-hidden"
    style="background: var(--anime-dark)"
  >
    <!-- ── Background decoration ──────────────── -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 opacity-[0.025]"
        style="background-image: linear-gradient(rgba(255,107,157,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,157,0.8) 1px, transparent 1px); background-size: 60px 60px;"
      />
      <div class="absolute top-0 left-0 right-0 h-px"
        style="background: linear-gradient(90deg, transparent, rgba(255,107,157,0.3), transparent)"
      />
      <div class="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl"
        style="background: radial-gradient(ellipse, rgba(255,107,157,0.06) 0%, transparent 70%)"
      />
      <div class="absolute top-1/4 -left-24 w-72 h-72 rounded-full blur-3xl"
        style="background: rgba(192,132,252,0.05)"
      />
      <div class="absolute bottom-1/4 -right-24 w-72 h-72 rounded-full blur-3xl"
        style="background: rgba(56,189,248,0.05)"
      />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

      <!-- ── Section header ─────────────────────── -->
      <div ref="headerRef" class="mb-16 opacity-0 text-center">
        <p class="chapter-label mb-3 flex items-center justify-center gap-3">
          <span class="inline-block w-8 h-px bg-anime-primary" />
          Chapter 05
          <span class="inline-block w-8 h-px bg-anime-primary" />
        </p>
        <h2 class="text-4xl lg:text-5xl font-black text-anime-text mb-4">
          Let's <span class="gradient-text">Connect</span>
        </h2>
        <p class="text-anime-muted text-sm lg:text-base max-w-md mx-auto leading-relaxed">
          Have a project in mind, a collab idea, or just want to say
          <span class="text-anime-primary font-semibold">konnichiwa</span>?
          My inbox is always open.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

        <!-- ══ LEFT — Info + Socials (2 cols) ════ -->
        <div ref="leftRef" class="lg:col-span-2 opacity-0 space-y-8">
<!-- contact info card -->
        <div class="space-y-3">
  <div
    v-for="info in contactInfo"
    :key="info.label"
    class="info-card glass-card p-4 rounded-sm flex items-center gap-4 group transition-all duration-300 hover:border-anime-primary/30"
    style="border: 1px solid rgba(255,255,255,0.06)"
  >
    <div class="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
      :style="`background: ${info.color}15; border: 1px solid ${info.color}30; color: ${info.color}`"
      v-html="info.icon"
    ></div>

    <div>
      <p class="text-xs text-anime-muted uppercase tracking-wider mb-0.5">{{ info.label }}</p>
      <a :href="info.href"
        class="text-sm font-semibold text-anime-text group-hover:text-anime-primary transition-colors duration-200"
      >{{ info.value }}</a>
    </div>
    <span class="ml-auto text-anime-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs">→</span>
  </div>
</div>

          <!-- Availability banner -->
          <div class="relative overflow-hidden rounded-sm p-4 border border-green-500/20"
            style="background: rgba(34,197,94,0.05)"
          >
            <div class="flex items-center gap-3">
              <span class="relative flex h-3 w-3 flex-shrink-0">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
              </span>
              <div>
                <p class="text-sm font-bold text-green-400">Currently Available</p>
                <p class="text-xs text-anime-muted mt-0.5">Open to freelance & full-time roles</p>
              </div>
            </div>
            <!-- Shimmer -->
            <div class="absolute inset-0 opacity-20"
              style="background: linear-gradient(105deg, transparent 40%, rgba(34,197,94,0.15) 50%, transparent 60%); animation: contact-shimmer 3s ease infinite"
            />
          </div>

          <!-- Social links -->
          <div>
 <p class="text-xs text-anime-muted uppercase tracking-widest mb-4 flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3 text-anime-primary">
    <polyline points="9 18 15 12 9 6" />
  </svg>
  Find Me On
</p>
            <div class="grid grid-cols-2 gap-3">
              <a
                v-for="social in socials"
                :key="social.label"
                :href="social.url"
                target="_blank" rel="noopener"
                class="social-link group flex items-center gap-3 p-3 glass-card rounded-sm transition-all duration-300 hover:border-anime-primary/40"
                style="border: 1px solid rgba(255,255,255,0.06)"
              >
                <span class="text-xl transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5">
                  <span v-html="social.icon" />
                </span>
                <div>
                  <p class="text-xs font-bold text-anime-text group-hover:text-anime-primary transition-colors duration-200">
                    {{ social.label }}
                  </p>
                  <p class="text-xs text-anime-muted">{{ social.handle }}</p>
                </div>
              </a>
            </div>
          </div>

       <!-- Asanagi Umi Deep Quote -->
<div class="relative p-4 rounded-sm"
     style="background: rgba(255,107,157,0.04); border-left: 2px solid var(--anime-primary)">
 <p class="text-sm text-anime-muted italic leading-relaxed">
    "Tolong jangan pernah berubah. Tetaplah jadi satu-satunya tempatku pulang saat aku sudah lelah berpura-pura kuat"
  </p>
  <p class="text-xs text-anime-primary font-semibold mt-2">— Asanagi Umi</p>
        </div>
        </div>

        <!-- ══ RIGHT — Contact form (3 cols) ═════ -->
        <div ref="formRef" class="lg:col-span-3 opacity-0">
          <div class="form-card relative glass-card rounded-sm p-6 lg:p-8"
            style="border: 1px solid rgba(255,107,157,0.15)"
          >
            <!-- Manga brackets -->
            <div class="bracket bracket-tl" />
            <div class="bracket bracket-tr" />
            <div class="bracket bracket-bl" />
            <div class="bracket bracket-br" />

            <h3 class="text-lg font-black text-anime-text mb-6 flex items-center gap-2">
              <span class="text-anime-primary">✉</span>
              Send a Message
            </h3>

            <!-- Success state -->
<Transition name="success-fade">
  <div v-if="formState === 'success'"
    class="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-sm z-10"
    style="background: rgba(5,5,8,0.95); backdrop-filter: blur(8px)"
  >
    <!-- MODIFIKASI: Mengganti emoji 🎉 dengan SVG Check Circle -->
    <div class="animate-bounce text-anime-primary">
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    </div>

    <h4 class="text-xl font-black text-anime-primary tracking-wide">Message Sent!</h4>
    
    <!-- MODIFIKASI: Menghapus emoji ✨ -->
    <p class="text-anime-muted text-sm text-center max-w-xs leading-relaxed">
      Arigatou! I'll get back to you within 24 hours.
    </p>
    
    <button
      @click="resetForm"
      class="mt-2 px-5 py-2 border border-anime-primary text-anime-primary text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-anime-primary hover:text-anime-darker transition-all duration-300"
    >
      Send Another
    </button>
  </div>
</Transition>

            <div class="space-y-5">
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    
    <div class="field-group">
      <label class="field-label">Your Name</label>
      <div class="field-wrap" :class="{ 'focused': focusedField === 'name', 'has-error': errors.name }">
        <span class="field-icon flex items-center justify-center text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </span>
        <input
          v-model="form.name"
          type="text"
          placeholder="example ( bahlil )"
          class="field-input"
          @focus="focusedField = 'name'"
          @blur="focusedField = ''; validateField('name')"
        />
      </div>
      <p v-if="errors.name" class="field-error">{{ errors.name }}</p>
    </div>

    <div class="field-group">
      <label class="field-label">Email Address</label>
      <div class="field-wrap" :class="{ 'focused': focusedField === 'email', 'has-error': errors.email }">
        <span class="field-icon flex items-center justify-center text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </span>
        <input
          v-model="form.email"
          type="email"
          placeholder="asanagiumi@example.com"
          class="field-input"
          @focus="focusedField = 'email'"
          @blur="focusedField = ''; validateField('email')"
        />
      </div>
      <p v-if="errors.email" class="field-error">{{ errors.email }}</p>
    </div>
  </div>

  <div class="field-group">
    <label class="field-label">Subject</label>
    <div class="field-wrap" :class="{ 'focused': focusedField === 'subject' }">
      <span class="field-icon flex items-center justify-center text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
          <line x1="12" x2="12" y1="17" y2="22"></line>
          <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.68V6a3 3 0 0 0-3-3h-0a3 3 0 0 0-3 3v4.68a2 2 0 0 1-1.11 1.77l-1.78.9A2 2 0 0 0 5 15.24Z"></path>
        </svg>
      </span>
      <input
        v-model="form.subject"
        type="text"
        placeholder="Collaboration or Just saying hi!"
        class="field-input"
        @focus="focusedField = 'subject'"
        @blur="focusedField = ''"
      />
    </div>
  </div>
              <!-- Budget chips -->
              <div class="field-group">
                <label class="field-label">Budget Range <span class="text-anime-muted font-normal">(optional)</span></label>
                <div class="flex flex-wrap gap-2 mt-1">
                  <button
                    v-for="b in budgets"
                    :key="b"
                    type="button"
                    @click="form.budget = form.budget === b ? '' : b"
                    class="px-3 py-1.5 text-xs font-semibold rounded-sm transition-all duration-200"
                    :class="form.budget === b
                      ? 'bg-anime-primary text-anime-darker'
                      : 'border border-white/10 text-anime-muted hover:border-anime-primary/40 hover:text-anime-primary'"
                  >{{ b }}</button>
                </div>
              </div>

             <!-- Message -->
<div class="field-group">
  <label class="field-label">Message</label>
  <div class="field-wrap !items-start !py-3" :class="{ 'focused': focusedField === 'message', 'has-error': errors.message }">
    
    <!-- Ikon SVG Pesan (Menggantikan Emoji) -->
    <span class="field-icon mt-0.5 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 opacity-70">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    </span>
    
    <textarea
      v-model="form.message"
      rows="5"
      placeholder="Tell me about your project, idea, or just say konnichiwa!"
      class="field-input resize-none"
      @focus="focusedField = 'message'"
      @blur="focusedField = ''; validateField('message')"
    />
  </div>
                <div class="flex justify-between mt-1">
                  <p v-if="errors.message" class="field-error">{{ errors.message }}</p>
                  <span class="ml-auto text-xs text-anime-muted font-mono">{{ form.message.length }}/500</span>
                </div>
              </div>

              <!-- Submit button -->
              <button
                type="button"
                @click="submitForm"
                :disabled="formState === 'sending'"
                class="submit-btn w-full relative py-4 font-black text-sm uppercase tracking-widest rounded-sm overflow-hidden transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span class="relative z-10 flex items-center justify-center gap-2">
                  <span v-if="formState === 'idle'">✉ Send Message</span>
                  <span v-else-if="formState === 'sending'" class="flex items-center gap-2">
                    <span class="sending-dot" /><span class="sending-dot" /><span class="sending-dot" />
                    Sending...
                  </span>
                </span>
                <!-- Background gradient -->
                <div class="absolute inset-0 bg-gradient-to-r from-anime-primary to-anime-secondary" />
                <!-- Hover shine -->
                <div class="submit-shine absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style="background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)"
                />
              </button>

              <p class="text-xs text-anime-muted text-center">
                No spam, no bots — just a people who like to collaborate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { gsap }          from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ── Refs ─────────────────────────────────────────
const sectionRef = ref(null)
const headerRef  = ref(null)
const leftRef    = ref(null)
const formRef    = ref(null)

// ── Form state ───────────────────────────────────
const focusedField = ref('')
const formState    = ref('idle') // idle | sending | success

const form = reactive({
  name: '', email: '', subject: '', budget: '', message: '',
})

const errors = reactive({
  name: '', email: '', message: '',
})

const budgets = ['500–2K', '2K–5K', '5K–10K', '10K+', 'Let\'s talk']

// ── Validation ───────────────────────────────────
function validateField(field) {
  if (field === 'name') {
    errors.name = form.name.trim().length < 2 ? 'Name must be at least 2 characters' : ''
  }
  if (field === 'email') {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    errors.email = !re.test(form.email) ? 'Please enter a valid email address' : ''
  }
  if (field === 'message') {
    errors.message = form.message.trim().length < 10 ? 'Message must be at least 10 characters' : ''
  }
}

function validateAll() {
  validateField('name')
  validateField('email')
  validateField('message')
  return !errors.name && !errors.email && !errors.message
}

async function submitForm() {
  if (!validateAll()) return
  formState.value = 'sending'
  // Simulate API call
  await new Promise(r => setTimeout(r, 1800))
  formState.value = 'success'
}

function resetForm() {
  Object.assign(form, { name: '', email: '', subject: '', budget: '', message: '' })
  Object.assign(errors, { name: '', email: '', message: '' })
  formState.value = 'idle'
}

// ── Data ─────────────────────────────────────────
const contactInfo = [
  { 
    label: 'Email',    
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,  
    value: 'sanrioyumec@gmail.com', 
    href: 'mailto:sanrioyumec@gmail.com', 
    color: '#FF6B9D' 
  },
  { 
    label: 'Location', 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,  
    value: 'Indonesia',        
    href: '#',                        
    color: '#C084FC' 
  },
  { 
    label: 'Schedule', 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,  
    value: 'Tips',   
    href: 'https://bif.telkomuniversity.ac.id/cara-belajar-pemrograman-untuk-pemula/',          
    color: '#38BDF8' 
  },
]

const socials = [
  { 
    label: 'GitHub', 
    handle: '@markumarkntl', 
    url: 'https://github.com/markumarkntl',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>'
  },
  { 
    label: 'Twitter', 
    handle: '@pespzy', 
    url: 'https://twitter.com/pespzy',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>'
  },
  { 
    label: 'Instagram', 
    handle: '@exclusiveryzz', 
    url: 'https://instagram.com/exclusiveryzz',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>'
  },
  { 
    label: 'Discord', 
    handle: '@peepzyishere', 
    url: 'https://discord.com/users/peepzyishere',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.003.028.015.056.036.071a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .036-.071c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>'
  },
]

// ── GSAP ScrollTrigger ───────────────────────────
onMounted(() => {
  gsap.set([headerRef.value, leftRef.value, formRef.value], { y: 30 })

  gsap.to(headerRef.value, {
    opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    scrollTrigger: { trigger: headerRef.value, start: 'top 85%' },
  })

  gsap.to(leftRef.value, {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: leftRef.value, start: 'top 80%' },
  })

  gsap.to(formRef.value, {
    opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: formRef.value, start: 'top 80%' },
  })
})
</script>

<style scoped>
/* ── Field styles ────────────────────────────── */
.field-label {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--anime-muted);
  margin-bottom: 6px;
}

.field-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 2px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.field-wrap.focused {
  border-color: var(--anime-primary);
  box-shadow: 0 0 0 2px rgba(255,107,157,0.1), 0 0 12px rgba(255,107,157,0.1);
}
.field-wrap.has-error {
  border-color: #ef4444;
  box-shadow: 0 0 0 2px rgba(239,68,68,0.1);
}

.field-icon {
  font-size: 0.9rem;
  flex-shrink: 0;
  opacity: 0.7;
}

.field-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--anime-text);
  font-size: 0.875rem;
  font-family: inherit;
  width: 100%;
}
.field-input::placeholder { color: var(--anime-muted); opacity: 0.5; }

.field-error {
  font-size: 0.7rem;
  color: #f87171;
  margin-top: 4px;
  font-weight: 600;
}

/* ── Submit button ───────────────────────────── */
.submit-btn {
  color: var(--anime-darker);
  box-shadow: 0 0 30px rgba(255,107,157,0.3);
}
.submit-btn:not(:disabled):hover {
  box-shadow: 0 0 50px rgba(255,107,157,0.5), 0 0 80px rgba(192,132,252,0.2);
  transform: translateY(-2px);
}
.submit-btn:not(:disabled):active {
  transform: translateY(0);
}

/* ── Sending dots ────────────────────────────── */
.sending-dot {
  display: inline-block;
  width: 6px; height: 6px;
  background: var(--anime-darker);
  border-radius: 50%;
  animation: dot-bounce 0.6s ease-in-out infinite;
}
.sending-dot:nth-child(2) { animation-delay: 0.1s; }
.sending-dot:nth-child(3) { animation-delay: 0.2s; }

@keyframes dot-bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-4px); }
}

/* ── Success transition ──────────────────────── */
.success-fade-enter-active, .success-fade-leave-active { transition: opacity 0.4s ease; }
.success-fade-enter-from,  .success-fade-leave-to      { opacity: 0; }

/* ── Manga brackets ──────────────────────────── */
.form-card { position: relative; }
.bracket {
  position: absolute;
  width: 16px; height: 16px;
  border-color: var(--anime-primary);
  border-style: solid;
  opacity: 0.6;
  z-index: 2;
}
.bracket-tl { top: -1px;    left: -1px;  border-width: 2px 0 0 2px; }
.bracket-tr { top: -1px;    right: -1px; border-width: 2px 2px 0 0; }
.bracket-bl { bottom: -1px; left: -1px;  border-width: 0 0 2px 2px; }
.bracket-br { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }

/* ── Social link hover ───────────────────────── */
.social-link:hover {
  box-shadow: 0 4px 20px rgba(255,107,157,0.1);
  transform: translateY(-2px);
}

/* ── Contact shimmer ─────────────────────────── */
@keyframes contact-shimmer {
  0%   { transform: translateX(-100%); }
  60%  { transform: translateX(200%); }
  100% { transform: translateX(200%); }
}
</style>