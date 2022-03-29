<template>
  <div class="Index">
    <div class="Nav">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="NavIndex NavIndex-Left">
            <div class="LeftTab">
              <span
                @click="TabClick(item, index)"
                :class="TabIndex == index ? 'Btn BtnS' : 'Btn BtnP'"
                class="Btn Btn1"
                v-for="(item, index) in LeftTab"
                :key="index"
              >
                {{ item.Tab }}
              </span>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="NavIndex NavIndex-Center">
            <span
              :class="TitleIndex == index ? 'NavTitleS' : 'NavTitle'"
              class="NavTitle"
              @click="TitleClick(item, index)"
              v-for="(item, index) in NavTitle"
              :key="index"
              >{{ item.Title }}
            </span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="NavIndex NavIndex-Right"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      TabIndex: 0,
      TitleIndex: 0,
      LeftTab: [
        {
          Tab: 'Latest'
        },
        {
          Tab: 'Popular'
        }
      ],
      NavTitle: [
        {
          Title: 'Web'
        },
        {
          Title: 'Web'
        }
      ]
    }
  },
  methods: {
    TabClick(item, index) {
      this.TabIndex = index
    },
    TitleClick(item, index) {
      this.TitleIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
.Index {
  width: 100%;
  height: 100%;
  .Nav {
    margin-top: 20px;
    height: 80px;
    .NavIndex {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
    .NavIndex-Left {
      padding: 5px 10px;
      .LeftTab {
        display: flex;
        width: 100%;
        height: 100%;
        border-radius: 50px;
        background-color: #fcfcff;
        padding: 10px;

        .Btn {
          transition: all 0.5s;

          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
          color: #9091a3;
        }
        .BtnS {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
          color: #282949;
          font-weight: bold;
          background-color: #fff;
          border-radius: 50px;
          box-shadow: 0 0px 20px #e9e9f5;
        }
      }
    }
    .NavIndex-Center {
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
        background-color: #fcfcff;
        padding: 10px 15px;
        border-radius: 20px;
        margin-right: 30px;
      }
    }
  }
}
/deep/ .el-row,
/deep/ .el-col {
  height: 100%;
}
</style>
