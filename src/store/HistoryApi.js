import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import AuthService from '@/services/AuthService'

let api_endpoint = process.env.VUE_APP_CSSHOP_ENDPOINT || "http://localhost:1337"

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
    async fetchDataGet({ commit }){ 
      let headers = AuthService.getApiHeader()
      let res = await Axios.get(api_endpoint+"/history-of-points-earned-tables",headers) 
      
      commit('fetch',{res})  
    },
    async fetchDataUse({ commit }){ 
        let headers = AuthService.getApiHeader()
        let res = await Axios.get(api_endpoint+"/points-usage-history-tables",headers) 
        
        commit('fetch',{res})  
      },
    async addDataGet({commit},payload){
      let url = api_endpoint + "/history-of-points-earned-tables" 
      let body = { 
        type: payload.type,
        prize: payload.prize,
        points: payload.points,
        user: payload.user
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
},
async addDataUse({commit},payload){
  let url = api_endpoint + "/points-usage-history-tables" 
  let body = { 
    image:payload.image,
    item: payload.item,
    points_usage: payload.points_usage,
    user: payload.user
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
}
})
