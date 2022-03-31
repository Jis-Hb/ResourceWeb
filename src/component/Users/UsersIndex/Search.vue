<template>
  <div class="SearchBox">
    <div class="Num">Num 520</div>
    <div class="Info">
      <div class="Title">炸毛小焦</div>
    </div>
    <div class="Search">
      <el-input
        style="width: 50%"
        placeholder="请输入内容"
        v-model="Search"
        prefix-icon="el-icon-search"
        class="input-with-select"
        @keypress.native.enter="KeySearch"
      >
        <el-select style="width: 130px" v-model="Select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      Search: '',
      Select: ''
    }
  },
  methods: {
    KeySearch() {
      console.log(this.Search)
      const ColorArr = ['Dd4357d', 'D8a8ba1', 'Decb332', 'D27b8bf', 'Dcba5dd', 'Dfb7f8f', 'Df1dae5']

      const obj = [
        {
          id: 110,
          msg: this.Search,
          time: 12,
          type: window.MESSAGE_TYPE.NORMAL,
          barrageStyle: ColorArr[Math.ceil(Math.random() * ColorArr.length - 1)]
        }
      ]
      this.$store.commit('GetBarrageList', obj)
      this.Search = ''
    }
  }
}
</script>

<style lang="less" scoped>
.SearchBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  padding: 80px;
  .Num {
    flex: 0.1;
    width: 100%;
    color: #ff799f;
    font-weight: bold;
  }
  .Info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex: 0.7;
    .Title {
      font-size: 24px;
      font-weight: bold;
      color: #282949;
    }
  }
  .Search {
    padding-top: 100px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
/deep/ .el-input__inner {
  outline: none;
  border-color: #f4f4ff;
  height: 60px;
  border-radius: 0 10px 10px 0;
  color: #363636;
  font-size: 16px;
}
/deep/ .el-input-group__prepend {
  border-radius: 10px 0 0 10px;
  border-color: #f4f4ff;
  color: #363636;
  background-color: #fff;
}
/deep/ .el-input__icon {
  font-size: 16px;
  color: #9192a2;
}
/deep/ .el-icon-search {
  // font-size: 30px;
  // line-height: 70px;
  // padding-right: 20px;
}
</style>
