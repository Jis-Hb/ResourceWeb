import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function createStore() {
  return new Vuex.Store({
    state: {
      barrageList: []
    },
    mutations: {
      GetBarrageList(state, payload) {
        payload.forEach((item, index) => {
          state.barrageList.push({ ...item })
        })
      }
    },
    actions: {
    },
    modules: {
    }
  })
}
const store = createStore();

export default store