<template>
<div>
    <head-bar-admin-page></head-bar-admin-page>
    <div class="table1">
        <table>
            <thead>
                <tr>
                <th>No.</th>
                
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
            console.log(id)
            
        },
        isAuthen(){
            return AuthUser.getters.isAuthen
        } 
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    outline: 0;
}

.table1{
    margin-top: 100px;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: 12px 12px 0 0;
    overflow: hidden;
    box-shadow: 0 12px 5px rgba(32, 32, 32, .3);
    position: absolute;
    /* z-index: 2; */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    background: white;
    text-align: center;
}
.table1 th{
    background: #196b39;
    color: white;
    text-transform: uppercase;
}

.table1 th, .table1 td{
    padding: 10px 15px;

}

</style>