<template lang="html">
  <div v-if="loading" :class="['page-loading', { 'animate-in': animateIn }, { 'animate-out': animateOut }]">
    <div :class="['page-inner-loading', { 'animate-in': animateIn }, { 'animate-out': animateOut }]">Loading...</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    animateIn: false,
    animateOut: false,
  }),
  methods: {
    start() {
      this.loading = true
      this.animateIn = true
    },
    finish() {
      setTimeout(() => {
        this.animateIn = false
        this.animateOut = true
      }, 800)
      setTimeout(() => {
        this.loading = false
        this.animateOut = false
      }, 1600)
    },
  },
}
</script>

<style>
/* Default page transition to make sure content is loaded in after the overlay is covering */
.page-enter-active,
.page-leave-active {
  transition: transform 500ms ease;
}

.page-enter-active {
  transition-delay: 300ms;
}

.page-enter,
.page-leave-to {
  transform: translateY(0px);
}

.page-enter,
.page-leave-to {
  transition-delay: none;
}

.page-loading {
  position: fixed;
  background-color: #ff0000;
  bottom: 0;
  top: auto;
  left: 0;
  width: 100vw;
  height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20000;
  overflow: hidden;
}

.page-inner-loading {
  color: white;
  font-size: 6vw;
  opacity: 0;
}

.page-loading.animate-in {
  animation: 2.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-up both;
}

.page-loading.animate-out {
  animation: 2.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-down both;
}

.page-inner-loading.animate-in {
  animation: 2.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-in-right both;
}

.page-inner-loading.animate-out {
  animation: 2.5s cubic-bezier(0.25, 1, 0.3, 1) wipe-out-left both;
}

@keyframes wipe-in-up {
  from {
    clip-path: inset(100% 0 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

@keyframes wipe-out-down {
  from {
    clip-path: inset(0 0 0 0);
  }
  to {
    clip-path: inset(100% 0 0 0);
  }
}

@keyframes wipe-in-right {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

@keyframes wipe-out-left {
  from {
    clip-path: inset(0 0 0 0);
  }
  to {
    clip-path: inset(0 100% 0 0);
  }
}
</style>
