import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:[],

      
  },
  getters:{
    stock: (state) => state.data,
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
    fetchStock ({ commit }){
      let res = {
        data: [ {
          name: "shirt",
          number: "1",
          picture: "รูปภาพ",
          point: "600",
          rewardDate: "2020-08-08",
          exchange: "exchange",
          pictureShopping: "รูปของที่ซื้อ",
          prize: "IphoneX",
          shoppingPoint: "50",
          date: "2020-08-07",
        },
        {
          name: "shirt",
          number: "1",
          picture: "รูปภาพ",
          point: "600",
          rewardDate: "2020-08-08",
          exchange: "exchange",
          pictureShopping: "รูปของที่ซื้อ",
          prize: "IphoneX",
          shoppingPoint: "50",
          date: "2020-08-07",
        },
         
      ]


      }
      commit('fetch', { res })

    },
    addStock({ commit }, payload){
      commit('add', { payload })
    }

  },
  modules: {

  }
})
