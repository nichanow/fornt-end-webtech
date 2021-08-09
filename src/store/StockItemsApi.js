import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import AuthService from '@/services/AuthService'

let api_endpoint = process.env.VUE_APP_POKEDEX_ENDPOINT || "http://localhost:1337"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:[]
  },
  getters:{
    data: (state) => state.data 
  },
  mutations: {
    fetch(state,{res}){ 
      state.data = res.data
    },
    add(state,payload){ 
      state.data.push(payload)
    },
},
actions: {
  async fetchData({ commit }){ 
      let headers = AuthService.getApiHeader()
    let res = await Axios.get(api_endpoint+"/rewards",headers) 
    commit('fetch',{res})  
  },
  async addData({commit},payload){
    let url = api_endpoint + "/rewards" 
    let body = { 
      item: payload.item,
      points: payload.points,
      amounts: payload.amounts
    }
    try{
      let headers = AuthService.getApiHeader()
    let res = await Axios.post(url,body,headers) 
    if(res.status === 200){ 
      commit('add',res.data) 
      return {
        success: true,
        data: res.data
      }
    }else{
      console.error(res)
      return {
        success: false,
        message: "Unknown status code: " + res.status 
      }
    }
   }catch(e){
     if(e.response.status === 403){
       console.error(e.response.data.message)
       return {
        success: false,
        message: e.response.data.message
      }
     }else{
      return {
        success: false,
        message: "Unknown error: " + res.response.data
      }
     }
   }
  }
},
modules: {
}
})