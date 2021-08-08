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
    data: (state) => state.data // ส่ง state แล้ว return data เพื่อเอาข้อมูลไปใช้งาน
  },
  mutations: {
    fetch(state,{res}){ 
      state.data = res.data
    },
    add(state,payload){ // ถ้าไม่ใส่ {} เราสามารถตั้งชื่อไม่เหมือนเดิมได้
      state.data.push(payload)
    },
//     edit(state,index,data){ // แก้ไขข้อมูลใน state
//       // state.data[index].name = data.name // เราต้องเอาค่า index มาด้วยเพื่อให้รู้ส่าจะแก้ที่ตัวไหน
//       // state.data[index].name_jp = data.name_jp
//       // state.data[index].pokemos_types = data.pokemon_types 
//       state.data[index] = data
//     }
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
    },
    // async editPokemon({commit},payload){
    //   // call api to edit data in to DB
    //   // call api to add data in to DB
    //   // ["fire","flying"] => ["name_in=fire","name_in=flying"]
    //   // name_in=fire&name_in=flying
    //   let qs = payload.pokemon_types.map(it => "name_in="+it).join("&")
    //   let res_types = await Axios.get(api_endpoint + "/pokemon-types?" + qs) // เพื่อเอาข้อมูล id ของตาราง types มาใช้

    //   let url = api_endpoint + "/monsters/" + payload.id // url สำหรับแก้ไขตัวนั้น ๆ
    //   let body = {  // เนื้อหาที่จะแก้ไข
    //     name: payload.name,
    //     name_jp: payload.name_jp,
    //     pokemon_types: res_types.data.map( it => it.id) // ใช้ id ในการใส่ types 
    //   }
    //   let res = await Axios.put(url,body) // edit data in DB โดยการ put ผ่าน url & body
    //   if(res.status === 200){ // เช็คว่าบันทึกลง DB เรียบร้อย
    //     commit('edit',payload.index,res.data) // update data to state
    //     // ใช้วืธี load หน้าใหม่เพื่อ update state จะดีกว่า
    //   }else{
    //     console.error(res)
    //   }
    // }
  },
  modules: {
  }
})
