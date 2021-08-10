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
  async editDataInStock({commit},payload){
      let url = api_endpoint + "/rewards/" + payload.id
      let body = { 
        item: payload.item,
        amounts: payload.amounts-1
      }
      let headers = AuthService.getApiHeader()
      let res = await Axios.put(url,body,headers) // edit data in DB โดยการ put ผ่าน url & body
      if(res.status === 200){ // เช็คว่าบันทึกลง DB เรียบร้อย
        return res.status 
      }else{
        console.error(res)
      }
    },
    async deleteDataInStock({commit},id){
      let url = api_endpoint + "/rewards/" + id
      let headers = AuthService.getApiHeader()
      let res = await Axios.delete(url,headers) 
      if(res.status === 200){ 
        return res.status 
      }else{
        console.error(res)
      }
    }
},
modules: {
}
})
