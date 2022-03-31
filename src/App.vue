<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {}
  }
}
</script>

<style lang="less">
#app {
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  min-width: 1200px;
}
/* 滚动条样式 */
::-webkit-scrollbar-track {
  /* -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3); */
  border-radius: 10px;
  background-color: #fcfcff;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: #fcfcff;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3); */
  background-color: #20214278;
}
b:hover {
  cursor: default;
}
</style>
