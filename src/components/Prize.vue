<template>
<div>
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
                    <td>{{ stock.amounts }}</td>
                    <button>Delete</button>                    
                    
                </tr>
                <!-- <tr v-for="(expense, index) in expense" :key="index" class = "expense"> -->
            
            </tbody>
        </table>
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
        <button @click="addData">Add</button>
    </div>
    
  </div>
</template>

<script>
import StockItemsApi from '@/store/StockItemsApi'
export default {
    data(){
        return{
            data:{ 
                item: "",
                points: "",
                amounts: ""
            },
            stocks:[]
        }
    },
    async created(){
        await StockItemsApi.dispatch('fetchData')
        this.stocks = StockItemsApi.getters.data
        // let user = AuthUser.getters.user.user_data
        // this.historyPoint = user.points_usage_history_tables
    },
    methods: {
        clearForm(){
            this.data = { 
                item: "",
                points: "",
                amounts: ""
            }
        },
        async addData(){   
            let payload = {
                item:this.data.item,
                points:this.data.points,
                amounts:this.data.amounts
            }
            let res = await StockItemsApi.dispatch('addData',payload) 
            if(res.success){
                this.clearForm()
            }else{
                // this.$swal("Add Failed", res.message, "error")
            }
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