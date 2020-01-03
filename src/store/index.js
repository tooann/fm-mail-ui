import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      userName: '未登录'
    }
  },
  getters: {
    userInfo(state){
      if(state.userInfo.userName === '未登录'){
        state.userInfo.userName = sessionStorage.getItem('userName') || '未登录';
        state.userInfo.userId = sessionStorage.getItem('userId') || '';
      }
      return state.userInfo;
    }
  },
  mutations: {
    changeLoginStatus (state, status) {
      state.userInfo.userName = status.userName;
      state.userInfo.userId = status.userId;
      sessionStorage.setItem('userName', status.userName);
      sessionStorage.setItem('userId', status.userId);
    }
  },
  actions: {
    actionLogin ({commit}, status) {
      commit('changeLoginStatus', status)
    }
  },
  modules: {
  }
})
