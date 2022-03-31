<template>
  <div class="Header">
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="HeaderBox Header-Left">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <span class="UserName">UserName</span>
        </div>
      </el-col>
      <el-col :span="15" class="hidden-xs-only">
        <div class="HeaderBox Header-Center">
          <span
            :class="TitleFlag == index ? 'NavTitleS' : 'NavTitle'"
            class="NavTitle"
            @click="TitleClick(item, index)"
            v-for="(item, index) in NavTitle"
            :key="index"
            >{{ item.Title }}
          </span>
        </div>
      </el-col>
      <el-col :span="5" class="hidden-sm-and-down">
        <div class="HeaderBox Header-Right">
          <div @click="Login" class="MyButton BtnLogin">登入</div>
          <div @click="Registered" class="MyButton BtnRegister">注册</div>
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
          Title: '首页',
          path: '/'
        },
        {
          Title: 'Dj',
          path: '/Dj'
        },
        {
          Title: 'Content'
        },
        {
          Title: 'Content'
        }
      ]
    }
  },
  methods: {
    TitleClick(item, index) {
      this.TitleFlag = index
      this.$router.push(item.path)
    },
    Login() {
      this.$router.push('/Login')
      this.TitleFlag = null
    },
    Registered() {
      this.$router.push('/Registered')
      this.TitleFlag = null
    }
  }
}
</script>

<style lang="less" scoped>
.Header {
  position: sticky;
  top: 0;
  background-color: #fcfcff;
  height: 80px;
  padding: 0 30px;
  border-bottom: 2px solid #f6f6ff;
  box-shadow: 0 10px 40px #e9e9f5;
  z-index: 9;
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
      transition: all 0.5s;
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
      transition: all 0.5s;
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
