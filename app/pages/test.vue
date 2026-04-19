<script setup lang="ts">
definePageMeta({
  path: "/test",
});
</script>

<template>
  <!-- <NuxtPageHero>
    <template #headline>
      <span class="headline">New release</span>
    </template>
    <template #title>
      <span class="title">
        Build faster
      </span>
    </template>
    <template #description>
      <p class="description">
        Everything you need.
      </p>
    </template>
  </NuxtPageHero> -->

  <div style="max-width:var(--max-w-wide);margin:0 auto;padding:0 1.5rem;">
    <div class="features-grid">
      <div class="f-card reveal visible">
        <svg
          class="f-icon"
          viewBox="0 0 36 36"
          fill="none"
        ><rect
          x="4"
          y="9"
          width="28"
          height="20"
          rx="3"
          stroke="#c4603a"
          stroke-width="1.75"
        /><path
          d="M4 11 L18 21 L32 11"
          stroke="#c4603a"
          stroke-width="1.75"
          stroke-linejoin="round"
        /><line
          x1="4"
          y1="29"
          x2="14"
          y2="21"
          stroke="#c4603a"
          stroke-width="1"
          opacity="0.3"
        /><line
          x1="32"
          y1="29"
          x2="22"
          y2="21"
          stroke="#c4603a"
          stroke-width="1"
          opacity="0.3"
        /></svg>
        <h3>Log every date, in minutes</h3>
        <p>A guided 5-step form captures what matters: where you went, how your body felt, the signals you noticed, and your gut feeling about seeing them again.</p>
      </div>
      <div class="f-card reveal visible" style="transition-delay:0.1s">
        <svg
          class="f-icon"
          viewBox="0 0 36 36"
          fill="none"
        ><polyline
          points="4,27 11,20 18,15 25,10 32,5"
          stroke="#c4603a"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        /><circle
          cx="4"
          cy="27"
          r="2.25"
          fill="#c4603a"
          opacity="0.45"
        /><circle
          cx="11"
          cy="20"
          r="2.25"
          fill="#c4603a"
          opacity="0.6"
        /><circle
          cx="18"
          cy="15"
          r="2.25"
          fill="#c4603a"
          opacity="0.75"
        /><circle
          cx="25"
          cy="10"
          r="2.25"
          fill="#c4603a"
          opacity="0.88"
        /><circle
          cx="32"
          cy="5"
          r="2.25"
          fill="#c4603a"
        /><line
          x1="3"
          y1="31"
          x2="33"
          y2="31"
          stroke="#c4603a"
          stroke-width="1.25"
          stroke-linecap="round"
          opacity="0.2"
        /></svg>
        <h3>See your patterns emerge</h3>
        <p>Green flags, red flags, and feelings accumulate over time into something real. Start to see what you're drawn to — and what keeps showing up uninvited.</p>
      </div>
      <div class="f-card reveal visible" style="transition-delay:0.2s">
        <svg
          class="f-icon"
          viewBox="0 0 36 36"
          fill="none"
        ><ellipse
          cx="18"
          cy="14.5"
          rx="10.5"
          ry="12"
          stroke="#c4603a"
          stroke-width="1.75"
        /><line
          x1="13"
          y1="27.5"
          x2="23"
          y2="27.5"
          stroke="#c4603a"
          stroke-width="1.75"
          stroke-linecap="round"
        /><line
          x1="18"
          y1="26.5"
          x2="18"
          y2="32"
          stroke="#c4603a"
          stroke-width="1.75"
          stroke-linecap="round"
        /><path
          d="M22.5 8 Q25 11.5 24 15.5"
          stroke="#c4603a"
          stroke-width="1.25"
          stroke-linecap="round"
          opacity="0.35"
        /></svg>
        <h3>Know yourself better</h3>
        <p>Your journal becomes a mirror. Your dating personality takes shape from your own words — not an algorithm's guess, but your actual lived experience.</p>
      </div>
    </div>
  </div>
</template>

<!-- <template>
  <section class="hero">
    <p class="hero-salutation">
      Dear you,
    </p>
    <h1>Your dates deserve to be written&nbsp;down.</h1>
    <p class="hero-sub">
      Dear Date is a private journal for your dating life. Name what you're looking for, log how each date actually felt, and see where the two meet — or don't.
    </p>
    <div class="hero-actions">
      <button class="lp-btn-primary" onclick="openAuthModal()">
        Start your journal — it's free ✦
      </button>
      <button class="lp-btn-ghost" onclick="openAuthModal(null,'signin')">
        Already have an account? Sign in →
      </button>
    </div>
    <div class="hero-envelope" aria-hidden="true">
      <svg
        class="env-svg"
        viewBox="0 0 220 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="110"
          cy="162"
          rx="76"
          ry="6"
          fill="rgba(196,96,58,0.12)"
        />
        <rect
          x="12"
          y="42"
          width="196"
          height="116"
          rx="8"
          fill="#faf7f2"
          stroke="#c4603a"
          stroke-width="2"
        />
        <path
          d="M12 42 L110 6 L208 42"
          fill="#f5ece5"
          stroke="#c4603a"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path
          d="M12 42 L110 96 L208 42"
          fill="#f0ddd4"
          stroke="#c4603a"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <line
          x1="12"
          y1="158"
          x2="96"
          y2="96"
          stroke="#dcc4b8"
          stroke-width="1.2"
        />
        <line
          x1="208"
          y1="158"
          x2="124"
          y2="96"
          stroke="#dcc4b8"
          stroke-width="1.2"
        />
        <circle
          cx="110"
          cy="96"
          r="20"
          fill="#7a1f0a"
        />
        <circle
          cx="110"
          cy="96"
          r="17.5"
          fill="#8b2515"
        />
        <path d="M110 108 C110 108 97 100 97 92.5 C97 88.8 99.7 86 103 86 C105.2 86 107.5 87.6 110 90 C112.5 87.6 114.8 86 117 86 C120.3 86 123 88.8 123 92.5 C123 100 110 108 110 108Z" fill="#faf7f2" />
      </svg>
    </div>
  </section>
</template> -->

<style lang="css" scoped>
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  max-width: var(--max-w-wide);
  margin: 0 auto;
}

.f-card {
  background: #fff;
  border: 1px solid var(--cream-border);
  border-top: 3px solid var(--tc-light);
  border-radius: 14px;
  padding: 1.75rem 1.6rem;
  transition:
    transform 0.2s,
    box-shadow 0.2s,
    border-top-color 0.2s;
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(18px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.headline {
  opacity: 0;
  animation: fadeUp 2s ease 0.3s forwards;
}

.title {
  opacity: 0;
  animation: fadeUp 2s ease 0.6s forwards;
}

.description {
  opacity: 0;
  animation: fadeUp 2s ease 0.9s forwards;
}

.hero {
  padding: 10rem 1.5rem 5rem;
  text-align: center;
  position: relative;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

section {
  display: block;
  unicode-bidi: isolate;
}

.hero::before {
  content: "";
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 500px;
  background: radial-gradient(ellipse, rgba(196, 96, 58, 0.06) 0%, transparent 68%);
  pointer-events: none;
}

.hero-salutation {
  font-family: var(--ff-display);
  font-style: italic;
  font-size: 1rem;
  color: var(--tc);
  margin-bottom: 1.25rem;
  letter-spacing: 0.01em;
  opacity: 0;
  animation: fadeUp 0.6s ease 0.15s forwards;
}

.hero h1 {
  font-size: clamp(2rem, 5.5vw, 3.25rem);
  font-style: italic;
  color: var(--ink);
  max-width: 620px;
  margin: 0 auto 1.4rem;
  opacity: 0;
  animation: fadeUp 0.6s ease 0.3s forwards;
}

.hero-sub {
  font-size: 1.0625rem;
  font-weight: 300;
  color: var(--ink-muted);
  max-width: 440px;
  margin: 0 auto 2.25rem;
  line-height: 1.75;
  opacity: 0;
  animation: fadeUp 0.6s ease 0.45s forwards;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  opacity: 0;
  animation: fadeUp 0.6s ease 0.6s forwards;
}

.lp-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: var(--tc);
  color: #fff;
  font-family: var(--ff-body);
  font-size: 0.9375rem;
  font-weight: 500;
  padding: 0.85rem 1.9rem;
  border-radius: 100px;
  box-shadow: 0 2px 14px rgba(196, 96, 58, 0.28);
  transition:
    background 0.2s,
    transform 0.15s;
  cursor: pointer;
  border: none;
}

.lp-btn-ghost {
  font-size: 0.85rem;
  color: var(--ink-subtle);
  transition: color 0.2s;
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--ff-body);
}
</style>
