import { createStore } from 'vuex'

// create a store instance
const store = createStore({
  strict: true,
  state: {
    msg: 'working',
  },
  getters: {
    getMsg(state) {
      return state.msg
    },
  },
  mutations: {},
  actions: {},
  modules: {},
})

export default store
