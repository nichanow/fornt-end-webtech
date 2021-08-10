<template>
  <div>
      <head-bar-admin-page></head-bar-admin-page>
      
      
      <div class="box">
          <h1>Add Item</h1>
        <div>
            <label for="item">Item </label>
            <input type="text" placeholder="item" v-model="data.item">
        </div>
        <div>
            <label for="points">Points </label>
            <input type="text" placeholder="points" v-model="data.points">
        </div>
        <div>
            <label for="amounts">Amounts </label>
            <input type="text" placeholder="amount" v-model="data.amounts">
        </div>
        <button @click="addItem">Add</button>
        <button @click="backPage">back</button>
      </div>
      
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
                this.$router.push('/admin/stock-prize')
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

<style lang="scss" scoped>

.box{
    width: 300px;
    padding: 30px;
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.4);
    text-align: center;
}
.box h3{
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    font-weight: 700;
    
}
.box input[type = "text"], .box input[type = "password"]{
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 3px solid #0367fd;
    padding: 14px 10px ;
    width: 220px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25px;
}
.box input[type = "text"]:focus, .box input[type = "password"]:focus{
   
    border-color: #ffc400ec;
}
</style>

