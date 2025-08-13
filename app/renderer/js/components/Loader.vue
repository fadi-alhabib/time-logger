<template>
  <div v-if="showLoader" ref="spinner" class="loader">
    <img src="assets/logo.svg" alt="Loading" class="spinner" />
  </div>
</template>

<script>
export default {
  name: "Loader",

  computed: {
    showLoader() {
      return this.$store.getters.loader;
    },
  },
};
</script>

<style lang="scss" scoped>
.loader {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;

  .spinner {
    width: 96px;
    height: 96px;
    z-index: 1500;
    animation: logoSpin 1.2s linear infinite,
      logoPulse 1.6s ease-in-out infinite;
  }
}

@keyframes logoSpin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes logoPulse {
  0% {
    opacity: 0.35;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.35;
  }
}
</style>
