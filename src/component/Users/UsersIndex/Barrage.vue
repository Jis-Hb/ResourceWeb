<template>
  <div class="Barrage">
    <vue-baberrage
      class="vue-baberrage"
      :isShow="barrageIsShow"
      :barrageList="barrageList"
      :maxWordCount="maxWordCount"
      :throttleGap="throttleGap"
      :loop="barrageLoop"
      :boxHeight="boxHeight"
      :messageHeight="messageHeight"
      :boxWidth="boxWidth"
      :hoverLanePause="hoverLanePause"
    >
      <template v-slot:default="slotProps">
        <span :class="'MySpan ' + slotProps.item.barrageStyle">
          {{ slotProps.item.msg }}
        </span>
      </template>
    </vue-baberrage>
    <Search class="Search"></Search>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import Search from './Search.vue'
export default {
  name: 'Barrage',
  data() {
    return {
      msg: '炸毛小焦~',
      barrageIsShow: true,
      messageHeight: 20,
      boxHeight: 650,
      barrageLoop: true,
      maxWordCount: 20,
      throttleGap: 1000,
      boxWidth: document.body.scrollWidth,
      hoverLanePause: true,
      list: [
        {
          id: 1,
          avatar:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
          msg: '炸毛小焦',
          time: 3,
          barrageStyle: 'red'
        },
        {
          id: 2,
          avatar:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
          msg: '炸毛小焦~',
          time: 8,
          barrageStyle: 'green'
        },
        {
          id: 3,
          avatar:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
          msg: '炸毛小焦~',
          time: 10,
          barrageStyle: 'normal'
        },
        {
          id: 4,
          avatar:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
          msg: '炸毛小焦~',
          time: 5,
          barrageStyle: 'blue'
        },
        {
          id: 5,
          avatar:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
          msg: '炸毛小焦~',
          time: 6,
          barrageStyle: 'red'
        },
        {
          id: 6,
          avatar:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
          msg: '炸毛小焦~',
          time: 12,
          barrageStyle: 'normal'
        },
        {
          id: 7,
          avatar:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
          msg: '炸毛小焦~',
          time: 5,
          barrageStyle: 'red'
        },
        {
          id: 8,
          avatar:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
          msg: 'dawdadawd',
          time: 5,
          style: {
            fontSize: 25
          }
        },
        {
          id: 9,
          avatar:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
          msg: '炸毛小焦~',
          time: 8,
          barrageStyle: 'red'
        },
        {
          id: 10,
          avatar:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
          msg: '炸毛小焦~',
          time: 10,
          barrageStyle: 'MyColor'
        }
      ]
    }
  },
  components: { Search },
  computed: {
    ...mapState({
      barrageList: (state) => state.barrageList
    })
  },
  mounted() {
    this.addToList()
    let that = this
    window.onresize = () => {
      return (() => {
        that.boxWidth = document.body.scrollWidth
        console.log(that.boxWidth)
      })()
    }
  },
  methods: {
    addToList() {
      const ColorArr = ['Dd4357d', 'D8a8ba1', 'Decb332', 'D27b8bf', 'Dcba5dd', 'Dfb7f8f', 'Df1dae5']
      let listS = []
      this.list.forEach((v, i) => {
        listS.push({
          id: v.id,
          avatar: v.avatar,
          msg: v.msg,
          time: 4 + i,
          type: window.MESSAGE_TYPE.NORMAL,
          barrageStyle: ColorArr[Math.ceil(Math.random() * ColorArr.length - 1)]
        })
      })
      this.$store.commit('GetBarrageList', listS)
    }
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
    z-index: 8;
    max-width: 1200px;
    margin: 0 auto;
  }
}
.barrages-drop {
  .baberrage-stage {
    position: absolute;
    width: 100%;
    height: 212px;
    overflow: hidden;
    top: 0;
    margin-top: 130px;
  }
}
.MySpan {
  padding: 5px 10px;
  border-radius: 50px;
  font-weight: bold;
  color: #fcfcff;
}
.Dd4357d {
  background: #d4357c3e;
  color: #d4357d;
}
.D8a8ba1 {
  background: #8a8bac3e;
  color: #8a8ba1;
}
.Decb332 {
  background: #ecb43243;
  color: #ecb332;
}
.D27b8bf {
  background: #27b7bf4a;
  color: #27b7bf;
}
.Dcba5dd {
  background: #c3a0db48;
  color: #c3a0db;
}
.Dfb7f8f {
  background: #fb7f8f57;
  color: #fb7f8f;
}
.Df1dae5 {
  background: #f1dae546;
  color: #f1dae5;
}

.vue-baberrage {
  position: relative;
  top: 0;
  z-index: 2;
  height: 100%;
  width: 100%;
  margin: 0 0 0 0;
}
</style>
