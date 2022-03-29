<template>
  <div class="Header">
    <el-row :gutter="20">
      <el-col :span="3">
        <div class="HeaderBox Header-Left">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <span class="UserName">UserName</span>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="HeaderBox Header-Center">
          <span
            :class="TitleFlag == index ? 'NavTitleS' : 'NavTitle'"
            class="NavTitle"
            @click="TitleFlag = index"
            v-for="(item, index) in NavTitle"
            :key="index"
            >{{ item.Title }}
          </span>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="HeaderBox Header-Right">
          <div class="MyButton BtnLogin">登入</div>
          <div class="MyButton BtnRegister">注册</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TitleFlag: 0,
      NavTitle: [
        {
          Title: 'Content'
        },
        {
          Title: 'Content'
        },
        {
          Title: 'Content'
        },
        {
          Title: 'Content'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.Header {
  height: 80px;
  padding: 0 30px;
  border-bottom: 2px solid #f6f6ff;
  box-shadow: 0 10px 20px #f6f6ff;
  .HeaderBox {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Header-Left {
    .UserName {
      color: #272c48;
      font-weight: bold;
      margin-left: 5px;
    }
  }
  .Header-Center {
    font-weight: bold;
    .NavTitle {
      cursor: pointer;
      color: #8a8ba1;
      margin-right: 30px;
    }
    .NavTitleS {
      cursor: pointer;
      color: #272c48;
      background-color: #f1f1fd;
      padding: 10px 15px;
      border-radius: 20px;
      margin-right: 30px;
    }
  }
  .Header-Right {
    .MyButton {
      cursor: pointer;
      padding: 10px 30px;
      border-radius: 10px;
      font-weight: bold;
    }
    .BtnLogin {
      background-color: #f1f1fd;
      color: #272c48;
      margin-right: 20px;
    }
    .BtnLogin:hover {
      box-shadow: 0 0px 15px #e2e2f6;
      color: transparent;
      text-shadow: #272c48 0 0 0.8px;
    }
    .BtnRegister {
      background-color: #202142;
      color: #ebebee;
    }
    .BtnRegister:hover {
      box-shadow: 0 0px 15px #191935;
      color: transparent;
      text-shadow: #ebebee 0 0 0.8px;
    }
  }
}
/deep/ .el-row,
/deep/ .el-col {
  height: 100%;
}
</style>
