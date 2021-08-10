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
    async fetchData({ commit }){ 
      let headers = AuthService.getApiHeader()
      let res = await Axios.get(api_endpoint+"/users-data",headers) 
      
      commit('fetch',{res})  
    },
    async addData({commit},payload){
      let url = api_endpoint + "/rewards" 
      let body = { 
        item: payload.item,
        points: payload.points,
        amounts: payload.amounts,
        check_date:payload.check_date
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
    async editDataInUser({commit},payload){
      let url = api_endpoint + "/users-data/" + payload.id
      let body = { 
        age: payload.age,
        check_date: payload.check_date,
        gender: payload.gender,
        id: payload.id,
        name: payload.name,
        total_points: payload.total_points,
      }
      let headers = AuthService.getApiHeader()
      let res = await Axios.put(url,body,headers) 
      if(res.status === 200){ 

      }else{
        console.error(res)
      }
    }
  },
  modules: {
  }
})
