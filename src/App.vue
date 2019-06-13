<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
  }
</script>

<style lang="scss">
@import '@/assets/main.scss';
#app {
  // font-family: 'Chivo', sans-serif;
  font-family: 'Roboto', sans-serif;
  // font-family: 'Roboto Condensed', sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
