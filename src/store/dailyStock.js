import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:[],

      
  },
  getters:{
    dailyStock: (state) => state.data,
  },
  mutations: {
    fetch (state, { res }){
      state.data = res.data
    },
    add(state, { payload }){
      state.data.push(payload)
    },
  },
  actions: {
    fetchdailyStock ({ commit }){
      let res = {
        data: [ {
          picture1: "10",
          picture2: "20",
          picture3: "30",
          picture4: "40",
          picture5: "50",
          picture6: "60",
          picture7: "70",
          date: "2020-08-07",
        }  
      ]


      }
      commit('fetch', { res })

    },
    adddailyStock({ commit }, payload){
      commit('add', { payload })
    }

  },
  modules: {

  }
})
