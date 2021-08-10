<template>
<div>
    <head-bar-admin-page></head-bar-admin-page>
    <div class="table1">
        <table>
            <thead>
                <tr>
                <th>No.</th>
                <th>Item</th>
                <th>Name Item</th>
                <th>Points</th>
                <th>Amounts</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr v-for="(income, index) in income" :key="index" class="income"> -->
                <tr class="rankUser"  v-for="(stock, index) in stocks" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>image</td>
                    <td>{{ stock.item }}</td>
                    <td>{{ stock.points }}</td>
                    <td >{{ stock.amounts }}</td>
                    <button @click="editData(stock.id)" >Edit</button>    
                    <button @click="deleteData(stock.id)" >Delete</button>                    
                    
                </tr>
                <!-- <tr v-for="(expense, index) in expense" :key="index" class = "expense"> -->
            
            </tbody>
        </table>
        <button @click="addData">Add</button>
    </div>
    
  </div>
</template>

<script>
import HeadBarAdminPage from '@/components/headbar/HeadBarAdminPage'
import StockItemsApi from '@/store/StockItemsApi'
import AuthUser from '@/store/AuthUser'
export default {
    data(){
        return{
            stocks:[]
        }
    },
    async created(){
        await StockItemsApi.dispatch('fetchData')
        this.stocks = StockItemsApi.getters.data
    },
    mounted(){ 
        if(!this.isAuthen()){
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
    methods: {
        addData(){   
            this.$router.push('/admin/stock/add-item')
        },
        editData(id){
            this.$router.push({name : 'EditItemInStock',params:{ id }})
        },  
        async deleteData(id){
            StockItemsApi.dispatch('deleteDataInStock',id)
            this.$swal("delete Success", "success")
            this.$router.push('/admin')
            
        },
        isAuthen(){
            return AuthUser.getters.isAuthen
        } 
    }
}
</script>

<style scoped>
table{
  margin-left: auto;
  margin-right: auto;
}
</style>