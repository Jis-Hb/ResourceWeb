<template>
  <div class="Main">
    <Header></Header>
    <Barrage v-if="ShowBarrage"></Barrage>
    <div class="ContentBox">
      <router-view />
    </div>
  </div>
</template>

<script>
import Barrage from '@/component/Users/UsersIndex/Barrage.vue'
import Header from './header.vue'
export default {
  components: {
    Header,
    Barrage
  },
  data() {
    return {
      ShowBarrage: true
    }
  },
  beforeRouteUpdate(to, from, next) {
    if (to.path != '/Users') {
      this.ShowBarrage = false
    } else {
      this.ShowBarrage = true
    }
    next()
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
.Main {
  width: 100%;
  height: 100vh;
  .ContentBox {
    position: relative;
    top: 0;
    max-width: 1200px;
    margin: 0 auto;
    height: calc(100vh - 80px);
  }
}
</style>
