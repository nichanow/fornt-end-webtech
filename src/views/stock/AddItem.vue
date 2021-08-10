<template>
  <div>
      <head-bar-admin-page></head-bar-admin-page>
      <h1>Add Item</h1>
      <div>
            <label for="item">Item </label>
            <input type="text" v-model="data.item">
        </div>
        <div>
            <label for="points">Points </label>
            <input type="text" v-model="data.points">
        </div>
        <div>
            <label for="amounts">Amounts </label>
            <input type="text" v-model="data.amounts">
        </div>
        <button @click="addItem">Add</button>
        <button @click="backPage">back</button>
  </div>
</template>

<script>
import HeadBarAdminPage from '@/components/headbar/HeadBarAdminPage'
import StockItemsApi from '@/store/StockItemsApi'
import AuthUser from "@/store/AuthUser"
export default {
    data(){
        return{
            data:{ 
                item: "",
                points: "",
                amounts: ""
            }
        }
    },
    mounted(){ 
        if(!this.isAuthen()){
            // this.$swal("Restricted Area", "You have no permission", "warning")
            alert("Restricted Area")
            this.$router.push('/')
        }else if(AuthUser.getters.user.role.name === "Authenticated"){
            alert("You is not admin")
            this.$router.push('/customer')
        }   
    },
    components:{
        HeadBarAdminPage
    },
    methods:{
        async addItem(){
            let payload = {
                item:this.data.item,
                points:this.data.points,
                amounts:this.data.amounts
            }
            let res = await StockItemsApi.dispatch('addData',payload) 
            if(res.success){
                this.$swal("Add Success", "success")
                this.$router.push('/stock-prize')
            }else{
                this.$swal("Add Failed", "error") 
            }
        },
        backPage(){
            this.$router.push('/admin/stock-prize')
        },
        isAuthen(){
            return AuthUser.getters.isAuthen
        } 
    }
}
</script>

<style>

</style>