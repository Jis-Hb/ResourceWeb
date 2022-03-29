<template>
  <div class="Barrage">
    <Search class="Search"></Search>
  </div>
</template>

<script>
import Search from './Search.vue'
export default {
  name: 'Barrage',
  components: { Search },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.Barrage {
  position: relative;
  top: 0;
  padding: 20px;
  height: 600px;
  background-color: #fcfcff;
  .Search {
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>
