<template>
  <div class="Main">
    <Header></Header>
    <div class="ContentBox">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './header.vue'
export default {
  component: {
    Header
  },
  data() {
    return {}
  }
}
</script>

<style></style>
