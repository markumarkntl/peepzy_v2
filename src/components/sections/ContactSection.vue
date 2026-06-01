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
          <span class="text-anime-primary font-semibold">konnichiwa</span>? 👋
          My inbox is always open.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

        <!-- ══ LEFT — Info + Socials (2 cols) ════ -->
        <div ref="leftRef" class="lg:col-span-2 opacity-0 space-y-8">

          <!-- Contact info cards -->
          <div class="space-y-3">
            <div
              v-for="info in contactInfo"
              :key="info.label"
              class="info-card glass-card p-4 rounded-sm flex items-center gap-4 group transition-all duration-300 hover:border-anime-primary/30"
              style="border: 1px solid rgba(255,255,255,0.06)"
            >
              <div class="w-10 h-10 rounded-sm flex items-center justify-center text-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                :style="`background: ${info.color}15; border: 1px solid ${info.color}30`"
              >{{ info.icon }}</div>
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
              <span class="text-anime-primary">◆</span> Find Me On
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
                  {{ social.icon }}
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

          <!-- Fun quote -->
          <div class="relative p-4 rounded-sm"
            style="background: rgba(255,107,157,0.04); border-left: 2px solid var(--anime-primary)"
          >
            <p class="text-sm text-anime-muted italic leading-relaxed">
              "The best interfaces are the ones that feel like magic — effortless, beautiful, and alive."
            </p>
            <p class="text-xs text-anime-primary font-semibold mt-2">— Yuki Tanaka</p>
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
                <div class="text-6xl animate-bounce">🎉</div>
                <h4 class="text-xl font-black text-anime-primary">Message Sent!</h4>
                <p class="text-anime-muted text-sm text-center max-w-xs">
                  Arigatou! I'll get back to you within 24 hours ✨
                </p>
                <button
                  @click="resetForm"
                  class="mt-2 px-5 py-2 border border-anime-primary text-anime-primary text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-anime-primary hover:text-anime-darker transition-all duration-300"
                >
                  Send Another
                </button>
              </div>
            </Transition>

            <!-- Form fields -->
            <div class="space-y-5">
              <!-- Name + Email row -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="field-group">
                  <label class="field-label">Your Name</label>
                  <div class="field-wrap" :class="{ 'focused': focusedField === 'name', 'has-error': errors.name }">
                    <span class="field-icon">👤</span>
                    <input
                      v-model="form.name"
                      type="text"
                      placeholder="peepsy"
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
                    <span class="field-icon">✉</span>
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

              <!-- Subject -->
              <div class="field-group">
                <label class="field-label">Subject</label>
                <div class="field-wrap" :class="{ 'focused': focusedField === 'subject' }">
                  <span class="field-icon">📌</span>
                  <input
                    v-model="form.subject"
                    type="text"
                    placeholder="Project Collaboration / Job Offer / Just saying hi!"
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
                  <span class="field-icon mt-0.5">💬</span>
                  <textarea
                    v-model="form.message"
                    rows="5"
                    placeholder="Tell me about your project, idea, or just say konnichiwa! 👋"
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
                No spam, no bots — just a human who loves to collaborate 🌸
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

const budgets = ['< $500', '$500–2K', '$2K–5K', '$5K–10K', '$10K+', 'Let\'s talk']

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
  { label: 'Email',    icon: '✉',  value: 'hello@yuki.dev',      href: 'mailto:peepsyajalah@gmail.com',   color: '#FF6B9D' },
  { label: 'Location', icon: '📍',  value: 'Indonesia',        href: '#',                        color: '#C084FC' },
  { label: 'Schedule', icon: '📅',  value: 'Book a 30min call',   href: 'https://bif.telkomuniversity.ac.id/cara-belajar-pemrograman-untuk-pemula/',          color: '#38BDF8' },
]

const socials = [
  { label: 'GitHub',   icon: '🐙', handle: '@yukidev',   url: 'https://github.com' },
  { label: 'Twitter',  icon: '🐦', handle: '@yukidev',   url: 'https://twitter.com' },
  { label: 'Instagram', icon: '💼', handle: 'Yuki Tanaka', url: 'https://linkedin.com' },
  { label: 'Discord', icon: '🎯', handle: '@yukidev',   url: 'https://dribbble.com' },
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